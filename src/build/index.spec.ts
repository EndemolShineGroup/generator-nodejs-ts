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

describe('app:build', () => {
  const PROJECT_NAME = 'glasf-bist';
  const options = {
    isPublic: true,
    projectName: PROJECT_NAME,
  };

  describe('Generates Travis CI configuration for a public project', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies .travis.yml', () => {
      // console.log(helper.options);
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.travis.yml'));
    });
  });

  describe('Generates CodeBuild configuration for a private project', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, { ...options, isPublic: false });
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies buildspec.yml', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'buildspec.yml'));
    });
  });
});
