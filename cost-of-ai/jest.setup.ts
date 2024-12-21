import '@testing-library/jest-dom'

// Extend Jest matchers
declare module jest {
  interface Matchers<R> {
    toBeInTheDocument(): R
    toHaveStyle(style: Record<string, any>): R
  }
} 