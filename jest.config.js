/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
/** */
const TEST_THEME = require('./.jest/globals/testTheme');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  resolver: '<rootDir>/.jest/resolver.js',
  setupFilesAfterEnv: ['<rootDir>/.jest/setupFilesAfterEnv.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/packages/(?:.+?)/lib/',
    '<rootDir>/packages/(?:.+?)/.cache/',
    '<rootDir>/packages/core/',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/packages/(?:.+?)/lib/',
    '<rootDir>/packages/core/',
  ],
  transformIgnorePatterns: ['node_modules/'],
  coverageDirectory: '.jest/coverage',
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  globals: {
    TEST_THEME,
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      isolatedModules: true,
    },
  },
};
