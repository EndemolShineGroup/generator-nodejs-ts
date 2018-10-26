// @TODO Replace this with `fs.walkDir()` or similar
export const Files: string[] = [
  '_editorconfig',
  '_czrc',
  '_commitlintrc.js',
  'tslint.json',
  'prettier.config.js',
];

export const PublicFiles: string[] = [];

export const PrivateFiles: string[] = [];

export default {
  common: Files,
  private: PrivateFiles,
  public: PublicFiles,
};
