import { encode } from 'gpt-tokenizer';
import { MODEL_OPTIONS } from '../constants/models';
import type { ModelSpec } from '../constants/models';
import type { TokenEstimate } from './types';

export function estimateResponseTokens(
  prompt: string, 
  modelName: string = 'GPT-3.5 Turbo'
): TokenEstimate {
  // Basic cleanup
  const cleanPrompt = prompt.trim();
  
  // If empty prompt, return 0
  if (!cleanPrompt) return { estimatedTokens: 0, confidence: 'high', lowerBound: 0, upperBound: 0 };
  
  // Use proper tokenizer
  const inputTokens = encode(cleanPrompt).length;

  // Get model specific characteristics
  const model = MODEL_OPTIONS.find(m => m.name === modelName) || MODEL_OPTIONS.find(m => m.name === 'GPT-3.5 Turbo')!;
  
  // Enhanced prompt analysis patterns
  const promptPatterns = {
    coding: /^(write|create|implement|debug|fix|code|program|function|class)/i,
    creative: /^(write.*story|compose|create.*narrative|imagine|describe.*scene)/i,
    analysis: /^(analyze|evaluate|compare|assess|review|examine)/i,
    question: /\?$/,
    summary: /^(summarize|tldr|summary)/i
  };

  // Determine prompt type and base multiplier
  let multiplier = 1.5;
  let confidence: 'low' | 'medium' | 'high' = 'medium';
  let variance = 0.3;

  if (promptPatterns.coding.test(cleanPrompt)) {
    multiplier = 4.0;
    confidence = 'medium';
    variance = 0.4;
  } else if (promptPatterns.creative.test(cleanPrompt)) {
    multiplier = 5.0;
    confidence = 'low';
    variance = 0.5;
  } else if (promptPatterns.analysis.test(cleanPrompt)) {
    multiplier = 3.0;
    confidence = 'medium';
    variance = 0.3;
  } else if (promptPatterns.question.test(cleanPrompt)) {
    multiplier = 2.0;
    confidence = 'high';
    variance = 0.2;
  } else if (promptPatterns.summary.test(cleanPrompt)) {
    multiplier = 0.5;
    confidence = 'high';
    variance = 0.1;
  }

  // Apply model-specific characteristics
  const modelSizeMultiplier = model.parameters / 175; // Normalize against GPT-3.5's size
  const modelEnergyImpact = model.energyMultiplier;
  multiplier *= Math.sqrt(modelSizeMultiplier) * modelEnergyImpact;

  // Calculate base token estimate
  const baseEstimate = Math.round(inputTokens * multiplier);

  // Calculate confidence intervals
  const rawLowerBound = Math.round(baseEstimate * (1 - variance));
  const rawUpperBound = Math.round(baseEstimate * (1 + variance));

  const lowerBound = Math.max(50, rawLowerBound);
  const upperBound = Math.max(lowerBound, Math.min(model.contextWindow / 2, rawUpperBound));

  // Final bounded estimate
  const estimatedTokens = Math.max(
    50,
    Math.min(baseEstimate, model.contextWindow / 2)
  );

  return {
    estimatedTokens,
    confidence,
    lowerBound,
    upperBound
  };
}