import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import { v4 } from 'uuid';
// @ts-ignore
import assert from 'yeoman-assert';

import { generateWithOptions } from '../setupTests';

describe('app:services', () => {
  const PROJECT_NAME = 'glasf-bist';
  const options = {
    isPublic: true,
    projectName: PROJECT_NAME,
  };

  describe('Generates services configuration files', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), v4());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies files correctly', () => {
      ['.codeclimate.yml', 'codecov.yml'].forEach((fileName) => {
        assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, fileName));
      });
    });
  });
});
