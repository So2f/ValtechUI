const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,

  // collectCoverageFrom: undefined,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  testEnvironment: 'jest-environment-jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: 'ts-jest',
};

module.exports = createJestConfig(config);
