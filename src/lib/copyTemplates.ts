import { AbstractGenerator, FilesToCopy } from './AbstractGenerator';
import replaceTemplatePrefix from './replaceTemplatePrefix';

/**
 * Copies template files to a destination
 * @param gen
 * @param files
 */
export default (gen: AbstractGenerator, files: FilesToCopy) => {
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
