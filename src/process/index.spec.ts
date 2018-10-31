import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import uuid from 'uuid/v4';
// @ts-ignore
import assert from 'yeoman-assert';

import { generateWithOptions } from '../setupTests';

describe('app:process', () => {
  const PROJECT_NAME = 'glasf-bist';
  const options = {
    addPrettier: true,
    addTSLint: true,
    projectName: PROJECT_NAME,
    skipInstall: true,
  };

  describe('Generates Husky and Lint-Staged configuration files', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies all files', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.huskyrc'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.lintstagedrc.yml'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.releaserc'));
    });

    it('adds dependencies to package.json', () => {
      ['husky', 'lint-staged', 'semantic-release'].forEach((dependency) => {
        assert.fileContent(
          path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
          new RegExp(dependency, 'g'),
        );
      });
    });

    it('adds scripts to package.json', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
        /"semantic-release":\s"semantic-release"/g,
      );
    });
  });
});
