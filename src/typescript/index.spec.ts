import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import uuid from 'uuid/v4';
// @ts-ignore
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

const generate = async (outputPath: string, options: {}) => {
  // @ts-ignore
  return await helpers
    .run(__dirname)
    .inDir(outputPath)
    .withOptions(options)
    .toPromise();
};

describe('app:typescript', () => {
  const PROJECT_NAME = 'glasf-bist';
  const options = {
    projectName: PROJECT_NAME,
  };

  describe('Generates TypeScript project files', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies files correctly', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'tsconfig.json'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'tsconfig.test.json'));
    });
  });
});
