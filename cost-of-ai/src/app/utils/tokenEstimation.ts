import type { TokenEstimate } from './types';

export function estimateResponseTokens(prompt: string): TokenEstimate {
  // Basic cleanup
  const cleanPrompt = prompt.trim();
  
  // If empty prompt, return 0
  if (!cleanPrompt) return { estimatedTokens: 0, confidence: 'high' };
  
  // Count input tokens (still simple for now, but we could use a proper tokenizer)
  const inputTokens = cleanPrompt.split(/\s+/).length;
  
  // Analyze prompt type
  const isQuestion = cleanPrompt.endsWith('?');
  const isInstruction = /^(write|create|generate|explain|describe|list)/i.test(cleanPrompt);
  const isSummary = /^(summarize|tldr|summary)/i.test(cleanPrompt);
  
  let multiplier = 1.5; // Default multiplier
  let confidence: 'low' | 'medium' | 'high' = 'medium';
  
  // Adjust multiplier based on prompt type
  if (isQuestion) {
    multiplier = 2.0;
    confidence = 'high';
  } else if (isInstruction) {
    multiplier = 3.0;
    confidence = 'medium';
  } else if (isSummary) {
    multiplier = 0.5;
    confidence = 'high';
  }
  
  // Calculate estimated tokens with some bounds
  const estimatedTokens = Math.max(
    50, // Minimum response size
    Math.min(
      Math.round(inputTokens * multiplier),
      2000 // Maximum response size
    )
  );
  
  return {
    estimatedTokens,
    confidence
  };
}