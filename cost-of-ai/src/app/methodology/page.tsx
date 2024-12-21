import Link from 'next/link';
import { MODEL_OPTIONS } from '../constants/models';
import { HARDWARE_OPTIONS } from '../constants/hardware';
import { COOLING_SYSTEMS, LOCATION_FACTORS, SEASONAL_FACTORS } from '../constants/water';

export default function Methodology() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link 
          href="/"
          className="mb-4 text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Calculator
        </Link>

        <div className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">Methodology</h1>
          <p className="text-gray-400 text-lg">A deep dive into our energy consumption calculations</p>
        </div>

        <div className="flex flex-col gap-6">
          {/* First Card - Calculation Process */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 space-y-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-100 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calculation Process
              </h2>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-medium">How We Calculate AI Resource Usage</h3>
                
                <div className="space-y-6">
                  {/* Token Estimation Section */}
                  <div>
                    <h4 className="text-lg font-medium text-blue-400">1. Predicting Response Length</h4>
                    <p className="mb-3">We analyze your prompt to estimate how many tokens (word pieces) the AI will use in its response:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <h5 className="font-medium mb-2">Task-Based Estimates</h5>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                          <li>Code generation: 4x input length (medium confidence)</li>
                          <li>Creative writing: 5x input length (low confidence)</li>
                          <li>Analysis tasks: 3x input length (medium confidence)</li>
                          <li>Simple questions: 2x input length (high confidence)</li>
                          <li>Summaries: 0.5x input length (high confidence)</li>
                        </ul>
                      </div>

                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <h5 className="font-medium mb-2">Specialized Tasks</h5>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                          <li>Translation: 1.5x input length (high confidence)</li>
                          <li>Data analysis: 4.5x input length (medium confidence)</li>
                          <li>Customer service: 2.5x input length (medium confidence)</li>
                          <li>Research: 6x input length (low confidence)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-blue-900/20 rounded-lg p-4 border border-blue-800/50">
                      <h5 className="font-medium mb-2">Confidence Levels</h5>
                      <ul className="space-y-2">
                        <li><span className="text-green-400">High confidence:</span> Predictable tasks like translation (±20% variance)</li>
                        <li><span className="text-yellow-400">Medium confidence:</span> Technical tasks like coding (±30-40% variance)</li>
                        <li><span className="text-red-400">Low confidence:</span> Open-ended tasks like research (±50% variance)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Energy Calculation Section */}
                  <div>
                    <h4 className="text-lg font-medium text-purple-400">2. Computing Energy Usage</h4>
                    <p className="mb-3">Energy consumption is calculated using three main components:</p>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <h5 className="font-medium mb-2">Base Power Usage</h5>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Active GPU power (70W - 700W)</li>
                        <li>Memory power consumption (25W - 120W)</li>
                        <li>Idle system power (15W - 150W)</li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4 mt-3">
                      <h5 className="font-medium mb-2">Efficiency Factors</h5>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Batch processing efficiency (larger batches = better efficiency)</li>
                        <li>Hardware age impact (0-10% yearly degradation)</li>
                        <li>Memory bandwidth limitations</li>
                        <li>Data center efficiency (PUE: 1.1-1.6)</li>
                      </ul>
                    </div>
                  </div>
                  {/* Water Usage Section */}
                  <div>
                    <h4 className="text-lg font-medium text-green-400">3. Estimating Water Usage</h4>
                    <p className="mb-3">Water consumption is calculated based on cooling requirements:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <h5 className="font-medium mb-2">Base Factors</h5>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Air cooling: 1.8L per kWh</li>
                          <li>Water cooling: 2.2L per kWh</li>
                          <li>Hybrid systems: 1.9L per kWh</li>
                          <li>Free cooling: 1.5L per kWh</li>
                        </ul>
                      </div>

                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <h5 className="font-medium mb-2">Environmental Adjustments</h5>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Location: ±50% (hot vs cold climates)</li>
                          <li>Season: ±40% (summer vs winter)</li>
                          <li>Cooling efficiency: 85-95%</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/50">
                    <h4 className="text-lg font-medium text-blue-400 mb-2">Understanding the Results</h4>
                    <p>Our calculations provide estimates based on real-world hardware specifications and environmental factors. While exact usage may vary, these estimates help understand the environmental impact of AI operations and identify opportunities for optimization.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <h4 className="text-lg font-medium text-blue-400 mb-2">Environmental Factors</h4>
                <p className="text-gray-300 mb-3">Our calculations incorporate both energy and water-related variables:</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-purple-400 mb-2">Energy Metrics</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        TDP Range: 70W - 700W
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Memory Power: 25W - 120W
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                        Idle Power: 15W - 150W
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                        PUE Factor: 1.1 - 1.6
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-purple-400 mb-2">Water Usage</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Base Usage: 1.5-2.2L/kWh
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Location Impact: ±50%
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Seasonal Variance: ±40%
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <h4 className="text-lg font-medium text-blue-400 mb-2">Hardware Performance Factors</h4>
                <p className="text-gray-300 mb-3">Our calculations now incorporate detailed hardware specifications and limitations:</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-purple-400 mb-2">Performance Metrics</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Memory Bandwidth: 320-5300 GB/s
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Age Degradation: 0-10% yearly
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                        Batch Processing Efficiency
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                        Memory Utilization Impact
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-purple-400 mb-2">Power Components</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Core Processing (TDP)
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Memory Power Draw
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Idle Power Consumption
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* New Card - Detailed Calculations */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 space-y-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-100 flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Detailed Calculations
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-medium text-yellow-400 mb-3">Energy Calculation Formula</h4>
                  <div className="space-y-2 text-gray-300">
                    <p className="font-mono bg-gray-800/50 p-2 rounded">
                      Energy = ((TDP × Utilization) + (Memory Power × Memory Utilization) + Idle Power) × 
                      GPU Count × Processing Time × PUE × Batch Factor × Model Factor
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Processing Time = Tokens / (Inference Speed × Efficiency Factors)</li>
                      <li>Batch Factor = BatchSize^0.8 (empirically derived)</li>
                      <li>Memory Utilization = min(1.0, Model Memory / Bandwidth)</li>
                      <li>Uncertainty Range: ±15-30% depending on hardware</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-medium text-yellow-400 mb-3">Water Usage Formula</h4>
                  <div className="space-y-2 text-gray-300">
                    <p className="font-mono bg-gray-800/50 p-2 rounded">
                      Water = Energy × Cooling Factor × Location Factor × Seasonal Factor
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>Base Water Usage: 1.5-2.2L/kWh (system dependent)</li>
                      <li>Location Impact: 0.5x to 1.5x multiplier</li>
                      <li>Seasonal Variance: 0.6x to 1.4x multiplier</li>
                      <li>Uncertainty Range: ±20-40% based on conditions</li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>
          </div>

          {/* New Card - Detailed Calculations */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 space-y-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-100 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Model Specifications
              </h2>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-gray-300">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2">Model</th>
                        <th className="text-right">Parameters</th>
                        <th className="text-right">Context</th>
                        <th className="text-right">Energy Multiplier</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MODEL_OPTIONS.map((model) => (
                        <tr key={model.name} className="border-b border-gray-700/50">
                          <td className="py-2">{model.name}</td>
                          <td className="text-right">{model.parameters}B</td>
                          <td className="text-right">{model.contextWindow.toLocaleString()}</td>
                          <td className="text-right">{model.energyMultiplier}x</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 space-y-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-100 flex items-center gap-2">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                Hardware Specifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HARDWARE_OPTIONS.map((hw) => (
                  <div 
                    key={hw.name} 
                    className="p-6 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                  >
                    <h4 className="text-lg font-medium text-gray-100 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      {hw.name}
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div className="text-gray-400 text-sm">TDP:</div>
                      <div className="text-gray-200">{hw.tdp}W</div>
                      
                      <div className="text-gray-400 text-sm">Inference Speed:</div>
                      <div className="text-gray-200">{hw.inferenceSpeed.toLocaleString()} tokens/s</div>
                      
                      <div className="text-gray-400 text-sm">Memory Power:</div>
                      <div className="text-gray-200">{hw.memoryPower}W</div>
                      
                      <div className="text-gray-400 text-sm">Idle Power:</div>
                      <div className="text-gray-200">{hw.idlePower}W</div>
                      
                      <div className="text-gray-400 text-sm">Memory Bandwidth:</div>
                      <div className="text-gray-200">{hw.memoryBandwidth.toLocaleString()} GB/s</div>
                      
                      <div className="text-gray-400 text-sm">Release Year:</div>
                      <div className="text-gray-200">{hw.yearReleased}</div>
                      
                      <div className="text-gray-400 text-sm">Performance Factor:</div>
                      <div className="text-gray-200">{hw.performanceDegradation}x</div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="text-sm text-gray-400">Relative Performance</div>
                      <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-green-400" 
                          style={{ 
                            width: `${(hw.inferenceSpeed / 2000) * 100}%`,
                            opacity: hw.performanceDegradation
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 space-y-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-100 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Environmental Impact Factors
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-purple-400">Cooling Systems</h3>
                  <div className="space-y-2">
                    {Object.entries(COOLING_SYSTEMS).map(([key, system]) => (
                      <div key={key} className="p-3 bg-gray-900/50 rounded border border-gray-700">
                        <h4 className="text-gray-100 font-medium">{system.type}</h4>
                        <p className="text-sm text-gray-400">{system.description}</p>
                        <div className="mt-2 text-sm text-gray-300">
                          <div>Efficiency: {system.efficiency}</div>
                          <div>Water Usage: {system.waterUsage}L/kWh</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-purple-400">Location Factors</h3>
                  <div className="space-y-2">
                    {Object.entries(LOCATION_FACTORS).map(([key, location]) => (
                      <div key={key} className="p-3 bg-gray-900/50 rounded border border-gray-700">
                        <h4 className="text-gray-100 font-medium">{location.region}</h4>
                        <p className="text-sm text-gray-400">{location.description}</p>
                        <div className="mt-2 text-sm text-gray-300">
                          <div>Multiplier: {location.multiplier}x</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-purple-400">Seasonal Factors</h3>
                  <div className="space-y-2">
                    {Object.entries(SEASONAL_FACTORS).map(([key, seasonal]) => (
                      <div key={key} className="p-3 bg-gray-900/50 rounded border border-gray-700">
                        <h4 className="text-gray-100 font-medium">{seasonal.region}</h4>
                        <p className="text-sm text-gray-400">{seasonal.description}</p>
                        <div className="mt-2 text-sm text-gray-300">
                          <div>Multiplier: {seasonal.multiplier}x</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
