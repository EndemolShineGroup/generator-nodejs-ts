// @TODO Replace this with `fs.walkDir()` or similar
export const Files: string[] = [];

export const PublicFiles: string[] = ['_travis.yml'];

export const PrivateFiles: string[] = ['buildspec.yml'];

export default {
  common: Files,
  private: PrivateFiles,
  public: PublicFiles,
};
