import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import uuid from 'uuid/v4';
// @ts-ignore
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

const generate = (outputPath: string, answers: object) => {
  // @ts-ignore
  return helpers
    .run(__dirname)
    .inDir(outputPath)
    .withPrompts(answers);
};

describe('app:git-hooks', () => {
  const PROJECT_NAME = 'glasf-bist';
  const answers: object = {
    isPublic: true,
    projectName: PROJECT_NAME,
  };

  describe('Generates Travis CI configuration for a public project', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, answers);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies .travis.yml', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.travis.yml'));
    });
  });

  describe('Generates CodeBuild configuration for a private project', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, { ...answers, isPublic: false });
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies buildspec.yml', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'buildspec.yml'));
    });
  });
});
