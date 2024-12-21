import {
  COOLING_SYSTEMS,
  LOCATION_FACTORS,
  SEASONAL_FACTORS,
  type CoolingSystem,
  type Location,
  type Season
} from '../constants/water';

interface WaterUsageParams {
  energyInKwh: number;
  coolingSystem: CoolingSystem;
  location: Location;
  season: Season;
}

/**
 * Calculates water usage based on energy consumption and environmental factors
 * @param params Water usage calculation parameters
 * @returns Water usage in liters
 */
export function calculateWaterUsage({
  energyInKwh,
  coolingSystem,
  location,
  season
}: WaterUsageParams): number {
  const cooling = COOLING_SYSTEMS[coolingSystem];
  const locationFactor = LOCATION_FACTORS[location];
  const seasonalFactor = SEASONAL_FACTORS[season];

  // Base calculation
  const baseWaterUsage = energyInKwh * cooling.waterUsage;

  // Apply efficiency factors
  const efficiencyAdjusted = baseWaterUsage * (1 / cooling.efficiency);

  // Apply environmental factors
  const environmentallyAdjusted = efficiencyAdjusted * 
    locationFactor.multiplier * 
    seasonalFactor.multiplier;

  return environmentallyAdjusted;
}

/**
 * Adjusts water usage based on Power Usage Effectiveness (PUE)
 * @param waterUsage Base water usage in liters
 * @param pue Power Usage Effectiveness value (typically 1.1-1.6)
 * @returns Adjusted water usage in liters
 */
export function adjustWaterUsageForPUE(waterUsage: number, pue: number): number {
  // Normalize PUE to a reasonable range
  const normalizedPue = Math.max(1.1, Math.min(pue, 1.6));
  
  // Calculate efficiency factor based on PUE
  const pueEfficiencyFactor = Math.pow((normalizedPue - 1.1) / 0.5, 0.7);
  
  return waterUsage * (1 + pueEfficiencyFactor);
}

/**
 * Get all available cooling systems
 * @returns Array of cooling system options
 */
export function getCoolingSystems() {
  return Object.entries(COOLING_SYSTEMS).map(([key, value]) => ({
    id: key,
    name: value.type,
    description: value.description
  }));
}

/**
 * Get all available locations
 * @returns Array of location options
 */
export function getLocations() {
  return Object.entries(LOCATION_FACTORS).map(([key, value]) => ({
    id: key,
    name: value.region,
    description: value.description
  }));
}

/**
 * Get all available seasons
 * @returns Array of season options
 */
export function getSeasons() {
  return Object.entries(SEASONAL_FACTORS).map(([key, value]) => ({
    id: key,
    name: key.toLowerCase(),
    description: value.description
  }));
}
