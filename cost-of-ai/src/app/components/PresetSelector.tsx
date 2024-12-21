import { PresetName } from '../constants/presets';
import Tooltip from './Tooltip';

interface PresetSelectorProps {
  onPresetSelect: (preset: PresetName) => void;
}

export default function PresetSelector({ onPresetSelect }: PresetSelectorProps) {
  const presetDescriptions = {
    quickQA: "Optimized for fast, simple question-answering tasks",
    codingTasks: "Configured for code generation and review with higher compute power",
    contentCreation: "Balanced setup for creative writing and content generation",
    batchProcessing: "High-performance configuration for processing multiple requests",
    ecoFriendly: "Energy-efficient setup using smaller models and efficient cooling",
    translation: "Optimized for language translation tasks",
    dataAnalysis: "Configured for processing and analyzing large datasets",
    chatbot: "Efficient setup for interactive chat applications",
    research: "High-capacity setup for complex research and analysis"
  };

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <label className="block text-sm font-medium text-gray-400">
          Load Preset Configuration
        </label>
        <Tooltip text="Choose a pre-configured setup optimized for specific use cases">
          <span className="text-gray-500 cursor-help">ⓘ</span>
        </Tooltip>
      </div>
      <select
        className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        onChange={(e) => onPresetSelect(e.target.value as PresetName)}
      >
        <option value="">Select a preset...</option>
        {Object.entries(presetDescriptions).map(([key, description]) => (
          <option key={key} value={key}>
            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: {description}
          </option>
        ))}
      </select>
    </div>
  );
}