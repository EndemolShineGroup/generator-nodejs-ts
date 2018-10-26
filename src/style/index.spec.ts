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

describe('app:style', () => {
  const PROJECT_NAME = 'glasf-bist';
  const options = {
    isPublic: true,
    projectName: PROJECT_NAME,
  };

  describe('Generates lint and style configuration files', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies all files', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.czrc'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.commitlintrc.js'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'prettier.config.js'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'tslint.json'));
    });

    it('uses GitHub adapter for Commitizen', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, '.czrc'),
        /"path":\s"@endemolshinegroup\/cz-github"/g,
      );
    });
  });

  describe('Generates a private project correctly', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, {
        ...options,
        isPublic: false,
      });
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('correctly inserts options into .czrc', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, '.czrc'),
        /"path":\s"@endemolshinegroup\/cz-jira-smart-commit"/g,
      );
    });
  });
});
