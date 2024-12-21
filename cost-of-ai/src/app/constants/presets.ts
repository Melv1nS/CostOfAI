export const PRESETS = {
    quickQA: {
      prompt: "What is the capital of France?",
      selectedHardware: "NVIDIA T4",
      selectedModel: "GPT-3.5 Turbo",
      utilizationFactor: 0.7,
      pue: 1.1,
      batchSize: 1,
      gpuCount: 1,
      coolingSystem: "AIR_COOLED" as const,
      location: "TEMPERATE" as const,
      season: "SPRING" as const
    },
  
    codingTasks: {
      prompt: "Write a Python function that implements binary search.",
      selectedHardware: "NVIDIA A100",
      selectedModel: "GPT-4",
      utilizationFactor: 0.9,
      pue: 1.2,
      batchSize: 1,
      gpuCount: 2,
      coolingSystem: "WATER_COOLED" as const,
      location: "TEMPERATE" as const,
      season: "SPRING" as const
    },
  
    contentCreation: {
      prompt: "Write a blog post about the future of artificial intelligence.",
      selectedHardware: "NVIDIA H100",
      selectedModel: "Claude 3 Opus",
      utilizationFactor: 0.85,
      pue: 1.15,
      batchSize: 1,
      gpuCount: 1,
      coolingSystem: "HYBRID" as const,
      location: "TEMPERATE" as const,
      season: "SPRING" as const
    },
  
    batchProcessing: {
      prompt: "Analyze the sentiment of this text: 'Great product, highly recommend!'",
      selectedHardware: "NVIDIA H200",
      selectedModel: "GPT-4",
      utilizationFactor: 0.95,
      pue: 1.2,
      batchSize: 32,
      gpuCount: 4,
      coolingSystem: "WATER_COOLED" as const,
      location: "COLD" as const,
      season: "WINTER" as const
    },
  
    translation: {
      prompt: "Translate this text to Spanish: 'Hello, how are you?'",
      selectedHardware: "NVIDIA A40",
      selectedModel: "GPT-3.5 Turbo",
      utilizationFactor: 0.75,
      pue: 1.15,
      batchSize: 4,
      gpuCount: 1,
      coolingSystem: "AIR_COOLED" as const,
      location: "TEMPERATE" as const,
      season: "SPRING" as const
    },
  
    dataAnalysis: {
      prompt: `Analyze this sales dataset and provide key insights:
Year,Quarter,Product,Revenue,Units
2023,Q1,Laptop,1250000,500
2023,Q1,Smartphone,980000,1400
2023,Q2,Laptop,1380000,550
2023,Q2,Smartphone,1120000,1600
2023,Q3,Laptop,950000,380
2023,Q3,Smartphone,1450000,2100
2023,Q4,Laptop,1680000,670
2023,Q4,Smartphone,1890000,2700`,
      selectedHardware: "NVIDIA A100",
      selectedModel: "Claude 3 Opus",
      utilizationFactor: 0.9,
      pue: 1.2,
      batchSize: 1,
      gpuCount: 2,
      coolingSystem: "WATER_COOLED" as const,
      location: "TEMPERATE" as const,
      season: "SUMMER" as const
    },
  
    chatbot: {
      prompt: `You are a helpful customer service assistant for an electronics store. 
Customer inquiry: "I bought a laptop from your store last week, but it won't turn on. I've tried charging it overnight but nothing happens when I press the power button. What should I do?"`,
      selectedHardware: "NVIDIA T4",
      selectedModel: "GPT-3.5 Turbo",
      utilizationFactor: 0.8,
      pue: 1.1,
      batchSize: 1,
      gpuCount: 1,
      coolingSystem: "AIR_COOLED" as const,
      location: "TEMPERATE" as const,
      season: "SPRING" as const
    },
  
    research: {
      prompt: `Conduct a comprehensive analysis of recent developments in quantum computing, focusing on:
1. Major breakthroughs in quantum error correction from 2023
2. Comparison of different qubit technologies (superconducting, ion trap, photonic)
3. Current limitations and challenges
4. Potential applications in cryptography and drug discovery
Please include relevant research papers and citations.`,
      selectedHardware: "NVIDIA H200",
      selectedModel: "Claude 3 Opus",
      utilizationFactor: 0.95
    }
  } as const;
  
  export type PresetName = keyof typeof PRESETS;