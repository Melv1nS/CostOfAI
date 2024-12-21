export const WATER_USAGE_FACTORS = {
    litersPerkWh: 1.8,  // Average data center water usage per kWh
    coolingEfficiency: 0.85  // Typical cooling system efficiency
  };
  
export const COOLING_SYSTEMS = {
  AIR_COOLED: {
    type: 'Air Cooled',
    efficiency: 0.85,
    waterUsage: 1.8, // Liters per kWh
    description: 'Traditional air cooling with minimal water usage'
  },
  WATER_COOLED: {
    type: 'Water Cooled',
    efficiency: 0.95,
    waterUsage: 2.2, // Liters per kWh
    description: 'Direct water cooling for better efficiency'
  },
  HYBRID: {
    type: 'Hybrid',
    efficiency: 0.90,
    waterUsage: 1.9, // Liters per kWh
    description: 'Combined air and water cooling'
  },
  FREE_COOLING: {
    type: 'Free Cooling',
    efficiency: 0.92,
    waterUsage: 1.5, // Liters per kWh
    description: 'Uses outside air when possible'
  }
} as const;

export const LOCATION_FACTORS = {
  TEMPERATE: {
    region: 'Temperate',
    multiplier: 1.0,
    description: 'Moderate climate zones'
  },
  TROPICAL: {
    region: 'Tropical',
    multiplier: 1.3,
    description: 'Hot and humid regions'
  },
  ARID: {
    region: 'Arid',
    multiplier: 1.5,
    description: 'Hot and dry regions'
  },
  COLD: {
    region: 'Cold',
    multiplier: 0.8,
    description: 'Cold climate zones'
  }
} as const;

export const SEASONAL_FACTORS = {
  WINTER: {
    multiplier: 0.8,
    description: 'December - February'
  },
  SPRING: {
    multiplier: 1.0,
    description: 'March - May'
  },
  SUMMER: {
    multiplier: 1.4,
    description: 'June - August'
  },
  FALL: {
    multiplier: 1.0,
    description: 'September - November'
  }
} as const;

export const WATER_COMPARISONS = [
    {
        item: "Drinking Water",
        amount: 0.25,  // liters
        icon: "🥤",
        unit: "glasses"
    },
    {
        item: "Dishwasher Load",
        amount: 15,  // liters
        icon: "🍽️",
        unit: "loads"
    },
    {
        item: "Shower",
        amount: 65,  // liters per shower
        icon: "🚿",
        unit: "showers"
    }
];

// Type exports
export type CoolingSystem = keyof typeof COOLING_SYSTEMS;
export type Location = keyof typeof LOCATION_FACTORS;
export type Season = keyof typeof SEASONAL_FACTORS;