import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default createJestConfig(config)