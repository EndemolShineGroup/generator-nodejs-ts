import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import uuid from 'uuid/v4';
// @ts-ignore
import assert from 'yeoman-assert';

import { generateWithOptions } from '../setupTests';

describe('app:node', () => {
  const PROJECT_NAME = 'glasf-bist';
  const options = {
    isPublic: true,
    projectDescription: 'glaf as a bist in January',
    projectName: PROJECT_NAME,
    projectScope: '@endemolshinegroup',
    version: '0.0.1',
  };

  describe('Generates base repository files', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies files correctly', () => {
      [
        '.gitignore',
        'CHANGELOG.md',
        'CONTRIBUTING.md',
        'LICENSE',
        'README.md',
      ].forEach((fileName) => {
        assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, fileName));
      });
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'CONTRIBUTING.md'),
        new RegExp(PROJECT_NAME, 'g'),
      );
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'README.md'),
        new RegExp(PROJECT_NAME, 'g'),
      );
    });
  });
});
