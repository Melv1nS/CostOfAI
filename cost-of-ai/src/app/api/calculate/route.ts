import { NextResponse } from 'next/server';
import { HARDWARE_OPTIONS } from '@/app/constants/hardware';
import { MODEL_OPTIONS } from '@/app/constants/models';
import { estimateResponseTokens } from '@/app/utils/tokenEstimation';
import type { CalculationParams } from '@/app/types';
import { calculateWaterUsage, adjustWaterUsageForPUE } from '@/app/utils/waterUsage';

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

    const { estimatedTokens } = estimateResponseTokens(params.prompt);
    const promptTokens = params.prompt.split(' ').length;
    const totalTokens = promptTokens + estimatedTokens;
    
    const batchEfficiencyFactor = Math.sqrt(params.batchSize);
    const gpuEfficiencyFactor = Math.pow(params.gpuCount, 0.8);
    const processingTime = (totalTokens / hardware.inferenceSpeed) / (batchEfficiencyFactor * gpuEfficiencyFactor);
    
    const batchEnergyFactor = Math.pow(params.batchSize, 0.8);
    const modelEnergyImpact = model.energyMultiplier;
    const energy = hardware.tdp * params.gpuCount * processingTime * params.utilizationFactor * params.pue * batchEnergyFactor * modelEnergyImpact;

    // Calculate water usage
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
      waterUsage: waterUsage,
      estimatedResponseTokens: estimatedTokens,
      totalTokens: totalTokens
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to calculate energy usage' },
      { status: 500 }
    );
  }
}