export default {
  common: [
    // Typescript
    'tsconfig.json',
    'tsconfig.test.json',
    // Jest
    'jest.config.js',
    // Docs
    'README.md',
    'CHANGELOG.md',
    'CONTRIBUTING.md',
    // Git
    '_gitignore',
    // src
    'src/index.ts',
    'src/index.spec.ts',
    'src/@types/json.d.ts',
  ],
  private: [],
  public: ['_codeclimate.yml', '_releaserc', 'codecov.yml', 'LICENSE'],
};
