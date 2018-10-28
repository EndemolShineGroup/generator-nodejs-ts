const preset = require('ts-jest').jestPreset;

module.exports = {
  preset: 'ts-jest',
  collectCoverage: false,
  coveragePathIgnorePatterns: [
    '/src/setupTests.ts',
    '/node_modules/',
    '/__fixtures__/',
  ],
  globals: {
    'ts-jest': {
      tsConfig: "tsconfig.test.json",
    },
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  modulePathIgnorePatterns: [
    '.*/templates'
  ],
  moduleDirectories: [
    'src',
    'node_modules',
  ],
  testMatch: [
    ...preset.testMatch,
    '**/?(*.)+(spec|integ|test).ts?(x)',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
};
