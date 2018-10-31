import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import uuid from 'uuid/v4';
// @ts-ignore
import assert from 'yeoman-assert';

import { generateWithPrompts } from '../setupTests';

describe('app', () => {
  const PROJECT_NAME = 'glasf-bist';
  const answers: object = {
    projectDescription: 'glaf as a bist in January',
    projectName: PROJECT_NAME,
    projectScope: '@endemolshinegroup',
    version: '0.0.1',
  };

  describe('Generates a project from a folder that does not have the same name as the project', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithPrompts(__dirname, OUTPUT_PATH, answers);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('folder matching project name exists and is target directory', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME));
    });

    it('adds .git folder to project', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.git'));
    });
  });

  describe('Generates a project from a folder that has the same name as the project', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithPrompts(__dirname, OUTPUT_PATH, answers);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('folder matching project name exists and is target directory', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME));
    });

    it('adds .git folder to project', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.git'));
    });
  });

  describe('Generates a non-git initialized project correctly', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithPrompts(__dirname, OUTPUT_PATH, {
        ...answers,
        isPublic: true,
        useGit: false,
      });
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('does not generate a .git file when useGit is set to false', () => {
      assert.noFile(path.join(OUTPUT_PATH, PROJECT_NAME, '.git'));
    });
  });
});
