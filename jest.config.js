module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
    '/__fixtures__/',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  globals: {
    'ts-jest': {
      tsConfig: "tsconfig.test.json",
    },
  },
  moduleDirectories: [
    'src',
    'node_modules',
  ],
  modulePathIgnorePatterns: [
    '.*/templates'
  ],
};
