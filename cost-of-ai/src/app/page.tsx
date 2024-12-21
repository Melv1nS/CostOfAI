'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { HARDWARE_OPTIONS } from './constants/hardware';
import { MODEL_OPTIONS } from './constants/models';
import { 
  COOLING_SYSTEMS, 
  LOCATION_FACTORS, 
  SEASONAL_FACTORS 
} from './constants/water';
import type { CalculationParams } from './types';
import InputField from './components/InputField';
import ResultsDisplay from './components/ResultsDisplay';
import EnergyComparison from './components/EnergyComparison';
import WaterComparison from './components/WaterComparison';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import PresetSelector from './components/PresetSelector';
import { PRESETS, PresetName } from './constants/presets';

export default function Home() {
  const [params, setParams] = useState<CalculationParams>({
    prompt: '',
    selectedHardware: HARDWARE_OPTIONS[0].name,
    selectedModel: MODEL_OPTIONS[0].name,
    utilizationFactor: 0.8,
    pue: 1.1,
    batchSize: 1,
    gpuCount: 1,
    estimatedResponseTokens: 0,
    coolingSystem: 'AIR_COOLED',
    location: 'TEMPERATE',
    season: 'SPRING'
  });
  const [energyUsage, setEnergyUsage] = useState<number | null>(null);
  const [waterUsage, setWaterUsage] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [tokenEstimation, setTokenEstimation] = useState<{
    confidence: 'low' | 'medium' | 'high';
    lowerBound: number;
    upperBound: number;
  }>({
    confidence: 'medium',
    lowerBound: 0,
    upperBound: 0
  });

  const calculateEnergyUsage = async () => {
    setIsCalculating(true);
    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
  
      if (!response.ok) {
        throw new Error('Failed to calculate energy usage');
      }
  
      const data = await response.json();
      
      setParams(prev => ({
        ...prev,
        estimatedResponseTokens: data.estimatedResponseTokens
      }));
      
      setEnergyUsage(data.energyUsage);
      setWaterUsage(data.waterUsage);
      setTokenEstimation({
        confidence: data.confidence,
        lowerBound: data.lowerBound,
        upperBound: data.upperBound
      });
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error calculating energy usage:', error);
      // You might want to add error state handling here
    } finally {
      setIsCalculating(false);
    }
  };

  const handlePresetSelect = (presetName: PresetName) => {
    if (presetName) {
      const preset = PRESETS[presetName];
      setParams(prev => ({
        ...prev,
        ...preset
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.main 
            key="input"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold text-gray-100">
                <FontAwesomeIcon icon={faCalculator} className="mr-2" />
                LLM Resource Calculator
              </h1>
              <p className="text-gray-400">Ever wondered how much energy ChatGPT uses for a single response?</p>
              <p className="text-gray-400">Calculate the energy and water consumption of Large Language Models</p>
              <Link 
                href="/methodology" 
                className="text-gray-400 hover:text-white transition-colors text-sm inline-block mt-2"
              >
                Learn more about our calculation methodology →
              </Link>
            </div>
            
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 space-y-8">
              <PresetSelector onPresetSelect={handlePresetSelect} />
              
              {/* Prompt Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-100">Input Text</h2>
                <div className="col-span-full">
                  <InputField
                    label="Prompt"
                    tooltip="The input text that will be processed by the model. Longer prompts require more energy to process."
                    type="textarea"
                    value={params.prompt}
                    onChange={(value) => setParams({...params, prompt: value})}
                    rows={4}
                    placeholder="Enter your prompt here..."
                  />
                </div>
              </div>

              {/* Energy Usage Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-100">Energy Usage Parameters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Hardware"
                    tooltip="Different GPU models have different power consumption (TDP) and inference speeds, affecting the total energy usage."
                    type="select"
                    value={params.selectedHardware}
                    onChange={(value) => setParams({...params, selectedHardware: value})}
                    options={HARDWARE_OPTIONS}
                  />

                  <InputField
                    label="Model"
                    tooltip="Larger models require more computational resources and energy to process the same input."
                    type="select"
                    value={params.selectedModel}
                    onChange={(value) => setParams({...params, selectedModel: value})}
                    options={MODEL_OPTIONS}
                  />

                  <InputField
                    label="Utilization Factor"
                    tooltip="The percentage of GPU resources being utilized during inference (0.0-1.0)"
                    type="number"
                    value={params.utilizationFactor}
                    onChange={(value) => setParams({...params, utilizationFactor: parseFloat(value)})}
                    min={0}
                    max={1}
                    helperText="Typical range: 0.6 - 0.9"
                  />

                  <InputField
                    label="PUE"
                    tooltip="Power Usage Effectiveness - ratio of total facility power to IT equipment power"
                    type="number"
                    value={params.pue}
                    onChange={(value) => setParams({...params, pue: parseFloat(value)})}
                    min={1}
                    max={2}
                    helperText="Typical range: 1.1 - 1.5"
                  />

                  <InputField
                    label="Batch Size"
                    tooltip="Number of prompts processed simultaneously. Higher values can improve efficiency."
                    type="number"
                    value={params.batchSize}
                    onChange={(value) => setParams({...params, batchSize: parseInt(value)})}
                    min={1}
                    max={128}
                    helperText="Typical range: 1 - 32"
                  />

                  <InputField
                    label="GPU Count"
                    tooltip="Number of GPUs used for inference. More GPUs can process requests faster but use more power."
                    type="number"
                    value={params.gpuCount}
                    onChange={(value) => setParams({...params, gpuCount: parseInt(value)})}
                    min={1}
                    max={16}
                    helperText="Typical range: 1 - 8"
                  />
                </div>
              </div>

              {/* Water Usage Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-100">Water Usage Parameters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Cooling System"
                    tooltip="Type of cooling system used in the data center"
                    type="select"
                    value={params.coolingSystem}
                    onChange={(value) => setParams({...params, coolingSystem: value})}
                    options={Object.entries(COOLING_SYSTEMS).map(([key, value]) => ({
                      name: key,
                      displayName: value.type,
                      description: value.description
                    }))}
                  />

                  <InputField
                    label="Location"
                    tooltip="Geographic location affects cooling efficiency and water usage"
                    type="select"
                    value={params.location}
                    onChange={(value) => setParams({...params, location: value})}
                    options={Object.entries(LOCATION_FACTORS).map(([key, value]) => ({
                      name: key,
                      displayName: value.region,
                      description: value.description
                    }))}
                  />

                  <InputField
                    label="Season"
                    tooltip="Seasonal temperature variations affect cooling requirements"
                    type="select"
                    value={params.season}
                    onChange={(value) => setParams({...params, season: value})}
                    options={Object.entries(SEASONAL_FACTORS).map(([key, value]) => ({
                      name: key,
                      displayName: key.charAt(0) + key.slice(1).toLowerCase(),
                      description: value.description
                    }))}
                  />
                </div>
              </div>

              <button
                onClick={() => calculateEnergyUsage()}
                disabled={isCalculating}
                className="w-full bg-blue-600 text-white p-4 rounded-lg font-medium hover:bg-blue-700 transform transition-all duration-200 hover:scale-[1.02] focus:ring-4 focus:ring-blue-900 disabled:opacity-50"
              >
                {isCalculating ? 'Calculating...' : 'Calculate Resource Usage'}
              </button>
            </div>
          </motion.main>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <button
              onClick={() => setShowResults(false)}
              className="mb-4 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Calculator
            </button>
            
            <ResultsDisplay 
              energyUsage={energyUsage!} 
              waterUsage={waterUsage!}
              totalTokens={params.prompt.split(' ').length + params.estimatedResponseTokens} 
              estimatedResponseTokens={params.estimatedResponseTokens}
              confidence={tokenEstimation.confidence}
              lowerBound={tokenEstimation.lowerBound}
              upperBound={tokenEstimation.upperBound}
            />
            <EnergyComparison energyUsage={energyUsage!} />
            <WaterComparison waterUsage={waterUsage!} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}