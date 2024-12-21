import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { WATER_COMPARISONS } from '../constants/water';

interface WaterComparisonProps {
  waterUsage: number; // in liters
}

interface WaterComparison {
  item: string;
  amount: number;
  icon: string;
  unit: string;
  decimals?: number; // Add optional decimals property
}

export default function WaterComparison({ waterUsage }: WaterComparisonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [waterUsage]);

  // Scale for single request comparison
  const scaleFactor = 1; // Show impact of 1 request
  const scaledWaterUsage = waterUsage * scaleFactor;

  const getDecimalPlaces = (comparison: WaterComparison) => {
    // Use 3 decimal places for showers and dishwasher loads, 1 for everything else
    return comparison.item === "Shower" || comparison.item === "Dishwasher Load" ? 3 : 1;
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6">
      <motion.h3 
        className="text-xl font-semibold text-gray-100 mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Water Usage Comparisons
      </motion.h3>
      <p className="text-gray-400 mb-4">
        Making this request uses the same amount of water as:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {WATER_COMPARISONS.map((comparison, index) => (
          <motion.div
            key={comparison.item}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 rounded-lg p-4 text-center relative overflow-hidden"
          >
            <div className="text-4xl mb-2">
              {comparison.icon}
            </div>
            <h4 className="text-gray-200 font-medium mb-2">{comparison.item}</h4>
            <p className="text-gray-400">
              {(scaledWaterUsage / comparison.amount).toFixed(getDecimalPlaces(comparison))} {comparison.unit || comparison.item.toLowerCase()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}