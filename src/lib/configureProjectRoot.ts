import path from 'path';

import { AbstractGenerator } from './AbstractGenerator';

/**
 * Configures a generator's destination root from a `projectName` option
 * @param gen
 */
export default (gen: AbstractGenerator) => {
  const targetDirName = gen
    .destinationRoot()
    .split(path.sep)
    .pop();

  const options: { [key: string]: any } = {
    ...gen.answers,
    ...gen.options,
  };

  if (targetDirName !== options.projectName) {
    gen.destinationRoot(path.join(gen.destinationRoot(), options.projectName));
  }
};
