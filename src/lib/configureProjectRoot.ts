import path from 'path';

import { FixedGenerator } from './types';

export default (gen: FixedGenerator) => {
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
