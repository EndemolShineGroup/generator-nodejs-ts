import helpers from 'yeoman-test';

export const generateWithOptions = async (
  generatorPath: string,
  outputPath: string,
  options: {},
) => {
  // @ts-ignore
  return await helpers
    .run(generatorPath)
    .inDir(outputPath)
    .withOptions(options)
    .toPromise();
};

export const generateWithPrompts = async (
  generatorPath: string,
  outputPath: string,
  answers: {},
) => {
  // @ts-ignore
  return await helpers
    .run(generatorPath)
    .inDir(outputPath)
    .withPrompts(answers)
    .toPromise();
};
