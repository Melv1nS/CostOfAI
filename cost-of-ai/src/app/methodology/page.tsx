import Link from 'next/link';
import { MODEL_OPTIONS } from '../constants/models';
import { HARDWARE_OPTIONS } from '../constants/hardware';
import { WATER_USAGE_FACTORS, COOLING_SYSTEMS, LOCATION_FACTORS, SEASONAL_FACTORS } from '../constants/water';

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
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 space-y-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-100 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calculation Process
              </h2>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-medium">Token Estimation</h3>
                <p>We estimate the number of tokens in your prompt using a standard tokenization approach that approximates common tokenizer behavior. This helps us understand the computational workload required for processing your input.</p>
                
                <h3 className="text-xl font-medium">Response Length Prediction</h3>
                <p>Based on historical data and model characteristics, we predict the likely response length for your specific prompt and chosen model. This prediction considers factors such as prompt length and model behavior patterns.</p>
                
                <h3 className="text-xl font-medium">Energy & Water Consumption</h3>
                <p>Our calculations consider both energy consumption and associated water usage in data centers:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Direct energy consumption factors</li>
                  <li>Cooling system efficiency (0.85-0.95)</li>
                  <li>Geographic location impact (0.8-1.5x multiplier)</li>
                  <li>Seasonal variations (0.8-1.4x multiplier)</li>
                  <li>Data center PUE impact</li>
                  <li>Water usage per kWh (1.5-2.2L)</li>
                </ul>
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
            </section>
          </div>

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
              <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {HARDWARE_OPTIONS.map((hw) => (
                  <div key={hw.name} className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <h4 className="font-medium text-gray-100 mb-2">{hw.name}</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-300">TDP: {hw.tdp}W</li>
                      <li className="text-gray-300">Inference: {hw.inferenceSpeed} tokens/s</li>
                      <li className="text-gray-300">Memory Power: {hw.memoryPower}W</li>
                      <li className="text-gray-300">Idle: {hw.idlePower}W</li>
                    </ul>
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
