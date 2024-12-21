export interface ModelSpec {
    name: string;
    parameters: number; // billions of parameters
    contextWindow: number; // maximum context length
    energyMultiplier: number; // relative energy cost multiplier
  }
  
  export const MODEL_OPTIONS: ModelSpec[] = [
    {
      name: "Claude 3 Sonnet",
      parameters: 175,
      contextWindow: 200000,
      energyMultiplier: 1.2
    },
    {
      name: "GPT-4",
      parameters: 1000,
      contextWindow: 128000,
      energyMultiplier: 1.5
    },
    {
      name: "Claude 3 Opus",
      parameters: 1000,
      contextWindow: 200000,
      energyMultiplier: 1.6
    },
    {
      name: "GPT-3.5 Turbo",
      parameters: 175,
      contextWindow: 16000,
      energyMultiplier: 1.0
    },
    {
      name: "Mistral 7B",
      parameters: 7,
      contextWindow: 32000,
      energyMultiplier: 0.7
    },
    {
      name: "GPT-O1",
      parameters: 16,
      contextWindow: 32000,
      energyMultiplier: 0.8
    }
  ];