import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface EnergyComparisonProps {
  energyUsage: number; // in joules
}

const EnergyComparison = ({ energyUsage }: EnergyComparisonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [energyUsage]);

  // Convert joules to watt-hours and scale up for more meaningful comparisons
  const wattHours = energyUsage / 3600; // Convert joules to watt-hours
  const scaleFactor = 1000; // Show impact of 1000 requests
  const scaledWattHours = wattHours * scaleFactor;
  
  const comparisons = [
    {
      item: "LED Lightbulb (10W)",
      duration: (scaledWattHours / 10 * 60).toFixed(1), // convert hours to minutes
      unit: "minutes",
      icon: "💡",
    },
    {
      item: "Smartphone Charge (5Wh per charge)",
      amount: (scaledWattHours / 5).toFixed(3),
      icon: "📱",
    },
    {
      item: "Electric Kettle (2000W)",
      duration: (scaledWattHours / 2000 * 60).toFixed(3), // convert hours to minutes
      unit: "minutes",
      icon: "☕",
    },
  ];

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-100 mb-2">Energy Usage Comparisons</h3>
      <p className="text-gray-400 mb-4">
        Making this same request 1,000 times uses the same energy as:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {comparisons.map((comparison, index) => (
          <motion.div
            key={comparison.item}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-700 rounded-lg p-4 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ 
                type: "spring",
                delay: index * 0.2 + 0.3,
                stiffness: 200,
                damping: 10
              }}
              className="text-4xl mb-2"
            >
              {comparison.icon}
            </motion.div>
            <h4 className="text-gray-200 font-medium mb-2">{comparison.item}</h4>
            <p className="text-gray-400">
              {comparison.duration ? 
                `Powering this for ${comparison.duration} ${comparison.unit}` :
                `${comparison.amount} ${comparison.item.toLowerCase()}`
              }
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EnergyComparison; 