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

  describe('Generates Node project files', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies files correctly', () => {
      ['.npmignore', '.npmrc', '.nvmrc', 'package.json'].forEach((fileName) => {
        assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, fileName));
      });
    });

    it('correctly inserts options into package.json', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
        /"name":\sPROJECT_NAME|"version":\s"0.0.1"|"description":\s"glaf as a bist in January"/g,
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

    it('generates an .npmrc with access=public', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, '.npmrc'),
        /access=public/g,
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

    it('generates an .npmrc with access=restricted', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, '.npmrc'),
        /access=restricted/g,
      );
    });
  });
});
