import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import uuid from 'uuid/v4';
// @ts-ignore
import assert from 'yeoman-assert';

import { generateWithOptions } from '../setupTests';

describe('app:style', () => {
  const PROJECT_NAME = 'glasf-bist';
  const options = {
    isPublic: true,
    projectName: PROJECT_NAME,
    skipInstall: true,
  };

  describe('Generates lint and style configuration files', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies all files', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.czrc'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.commitlintrc.js'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.editorconfig'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'prettier.config.js'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'tslint.json'));
    });

    it('adds dependencies to package.json', () => {
      ['@commitlint/cli', 'commitizen', 'prettier', 'tslint'].forEach(
        (dependency) => {
          assert.fileContent(
            path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
            new RegExp(dependency, 'g'),
          );
        },
      );
    });
  });

  describe('Generates a public project correctly', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('adds dependencies to package.json', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
        /@endemolshinegroup\/cz-github/g,
      );
    });

    it('correctly inserts options into .czrc', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, '.czrc'),
        /"path":\s"@endemolshinegroup\/cz-github"/g,
      );
      assert.noFileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, '.czrc'),
        /"path":\s"@endemolshinegroup\/cz-jira-smart-commit"/g,
      );
    });

    it('adds scripts to package.json', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
        /"commit":\s"git-cz"/g,
      );
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
        /"lint":\s"tslint -p tsconfig.json/g,
      );
    });
  });

  describe('Generates a private project correctly', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, {
        ...options,
        isPublic: false,
      });
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('adds dependencies to package.json', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
        /@endemolshinegroup\/cz-jira-smart-commit/g,
      );
    });

    it('correctly inserts options into .czrc', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, '.czrc'),
        /"path":\s"@endemolshinegroup\/cz-jira-smart-commit"/g,
      );
      assert.noFileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, '.czrc'),
        /"path":\s"@endemolshinegroup\/cz-github"/g,
      );
    });
  });
});
