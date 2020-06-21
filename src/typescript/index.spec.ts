import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import { v4 } from 'uuid';
// @ts-ignore
import assert from 'yeoman-assert';

import { generateWithOptions } from '../setupTests';

describe('app:typescript', () => {
  const PROJECT_NAME = 'glasf-bist';
  const options = {
    projectName: PROJECT_NAME,
    skipInstall: true,
  };

  describe('Generates TypeScript project files', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), v4());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies all files', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'tsconfig.json'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'tsconfig.test.json'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'jest.config.js'));
    });

    it('adds dependencies to package.json', () => {
      [
        '@types/jest',
        '@types/node',
        'rimraf',
        'ts-jest',
        'typedoc',
        'typescript',
      ].forEach((dependency) => {
        assert.fileContent(
          path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
          new RegExp(dependency, 'g'),
        );
      });
    });

    it('adds scripts to package.json', () => {
      [
        `"prebuild": "rimraf dist/"`,
        `"build": "tsc"`,
        `"build:docs": "rimraf docs/api && typedoc --out docs/api --target es6 --theme minimal --mode file src"`,
      ].forEach((script) => {
        assert.fileContent(
          path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
          new RegExp(script, 'g'),
        );
      });
    });

    it('adds types field to package.json', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
        /"types":\s"dist\/index.d.ts"/g,
      );
    });
  });

  describe('Generates TypeScript project files without example source code', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), v4());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, {
        ...options,
        generateExamples: false,
      });
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies all files', () => {
      assert.noFile(path.join(OUTPUT_PATH, PROJECT_NAME, 'src', 'index.ts'));
      assert.noFile(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'src', 'index.spec.ts'),
      );
    });
  });
});
