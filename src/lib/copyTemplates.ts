import replaceTemplatePrefix from './replaceTemplatePrefix';
import { FixedGenerator } from './types';

export interface FilesToCopy {
  common: string[];
  public: string[];
  private: string[];
}

export default (gen: FixedGenerator, files: FilesToCopy) => {
  let OutputFiles: string[] = [...files.common];

  const options: { [key: string]: any } = {
    ...gen.answers,
    ...gen.options,
  };

  const copyTemplate = (path: string) => {
    let replacedPath = replaceTemplatePrefix(path);

    gen.fs.copyTpl(
      gen.templatePath(path),
      gen.destinationPath(replacedPath),
      options,
    );
  };

  if (options.isPublic) {
    OutputFiles.push(...files.public);
  } else {
    OutputFiles.push(...files.private);
  }

  OutputFiles.forEach(copyTemplate);
};