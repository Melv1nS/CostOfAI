interface ResultsDisplayProps {
  energyUsage: number;
  waterUsage: number;
  totalTokens: number;
}

export default function ResultsDisplay({ energyUsage, waterUsage, totalTokens }: ResultsDisplayProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Results</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-400">Total Energy</p>
            <p className="text-xl font-bold text-gray-100">{energyUsage.toFixed(2)} joules</p>
            <p className="text-sm text-gray-400">({(energyUsage / 3600000).toFixed(6)} kWh)</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-400">Water Usage</p>
            <p className="text-xl font-bold text-gray-100">{waterUsage.toFixed(3)} L</p>
            <p className="text-sm text-gray-400">({(waterUsage * 1000).toFixed(1)} mL)</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-400">Per Token</p>
            <p className="text-xl font-bold text-gray-100">{(energyUsage / totalTokens).toFixed(4)} joules</p>
            <p className="text-sm text-gray-400">({(waterUsage / totalTokens).toFixed(6)} L)</p>
          </div>
        </div>
      </div>
    </div>
  );
}