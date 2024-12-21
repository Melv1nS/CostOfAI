import { NextResponse } from 'next/server';
import { HARDWARE_OPTIONS } from '@/app/constants/hardware';
import { MODEL_OPTIONS } from '@/app/constants/models';
import { estimateResponseTokens } from '@/app/utils/tokenEstimation';
import type { CalculationParams } from '@/app/types';
import { calculateWaterUsage, adjustWaterUsageForPUE } from '@/app/utils/waterUsage';
import { encode } from 'gpt-tokenizer';

export async function POST(request: Request) {
  try {
    const params: CalculationParams = await request.json();
    
    const hardware = HARDWARE_OPTIONS.find(h => h.name === params.selectedHardware);
    const model = MODEL_OPTIONS.find(m => m.name === params.selectedModel);
    
    if (!hardware || !model) {
      return NextResponse.json(
        { error: 'Invalid hardware or model selection' },
        { status: 400 }
      );
    }

    const { estimatedTokens, confidence, lowerBound, upperBound } = estimateResponseTokens(params.prompt, params.selectedModel);
    const promptTokens = encode(params.prompt).length;
    const totalTokens = promptTokens + estimatedTokens;
    
    const tokenMemorySize = model.parameters * 2; // 2 bytes per parameter for FP16
    const memoryBandwidthUtilization = Math.min(1.0, tokenMemorySize / hardware.memoryBandwidth);
    const memoryBottleneckFactor = 1.0 / (0.5 + 0.5 * memoryBandwidthUtilization);

    const batchEfficiencyFactor = Math.min(
      Math.sqrt(params.batchSize),
      params.batchSize * hardware.memoryBandwidth / (tokenMemorySize * 1024) // Convert to GB
    );

    const gpuEfficiencyFactor = Math.pow(params.gpuCount, 0.8) * hardware.performanceDegradation;

    const processingTime = (totalTokens / hardware.inferenceSpeed) / 
      (batchEfficiencyFactor * gpuEfficiencyFactor * memoryBottleneckFactor);
    
    const activeEnergy = (
      (hardware.tdp * params.utilizationFactor) + 
      (hardware.memoryPower * memoryBandwidthUtilization) +
      hardware.idlePower
    ) * params.gpuCount;

    const batchEnergyFactor = Math.pow(params.batchSize, 0.8);
    const modelEnergyImpact = model.energyMultiplier;
    const energy = activeEnergy * processingTime * params.pue * batchEnergyFactor * modelEnergyImpact;

    const energyInKwh = energy / 3600000;
    const baseWaterUsage = calculateWaterUsage({
      energyInKwh,
      coolingSystem: params.coolingSystem as any,
      location: params.location as any,
      season: params.season as any
    });
    const waterUsage = adjustWaterUsageForPUE(baseWaterUsage, params.pue);

    return NextResponse.json({
      energyUsage: energy,
      waterUsage,
      totalTokens,
      estimatedResponseTokens: estimatedTokens,
      confidence,
      lowerBound,
      upperBound,
      memoryUtilization: memoryBandwidthUtilization,
      effectiveSpeed: hardware.inferenceSpeed * memoryBottleneckFactor * hardware.performanceDegradation,
      processingTime
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to calculate energy usage' },
      { status: 500 }
    );
  }
}