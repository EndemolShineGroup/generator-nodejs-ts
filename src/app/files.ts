// @TODO Replace this with `fs.walkDir()` or similar
export const Files: string[] = [
  // Node/NPM
  'package.json',
  '_npmrc',
  '_nvmrc',
  '_npmignore',
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
];

export const PublicFiles: string[] = [
  '_codeclimate.yml',
  '_releaserc',
  'codecov.yml',
  'LICENSE',
];

export const PrivateFiles: string[] = [];

export default {
  common: Files,
  private: PrivateFiles,
  public: PublicFiles,
};
