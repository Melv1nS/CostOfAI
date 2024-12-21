import type { CoolingSystem, Location, Season } from './constants/water';

export interface HardwareSpec {
    name: string;
    tdp: number;  // Thermal Design Power in watts
    inferenceSpeed: number;  // tokens per second
    memoryPower: number;  // Memory power consumption in watts
    idlePower: number;  // Idle power consumption in watts
  }

export interface CalculationParams {
    prompt: string;
    selectedHardware: string;
    selectedModel: string;
    utilizationFactor: number;
    pue: number;
    batchSize: number;
    gpuCount: number;
    estimatedResponseTokens: number;
    coolingSystem: CoolingSystem;
    location: Location;
    season: Season;
}

export interface TokenEstimate {
    estimatedTokens: number;
    confidence: 'low' | 'medium' | 'high';
}