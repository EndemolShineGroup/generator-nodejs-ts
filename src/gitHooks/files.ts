// @TODO Replace this with `fs.walkDir()` or similar
export const Files: string[] = ['_huskyrc', '_lintstagedrc.yml'];

export const PublicFiles: string[] = [];

export const PrivateFiles: string[] = [];

export default {
  common: Files,
  private: PrivateFiles,
  public: PublicFiles,
};
