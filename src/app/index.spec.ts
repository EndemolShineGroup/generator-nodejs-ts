import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import uuid from 'uuid/v4';
// @ts-ignore
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

import replaceTemplatePrefix from '../lib/replaceTemplatePrefix';
import files from './files';

const generate = (outputPath: string, answers: object) => {
  // @ts-ignore
  return helpers
    .run(__dirname)
    .inDir(outputPath)
    .withPrompts(answers);
};

describe('EndemolShineGroupGenerator', () => {
  const PROJECT_NAME = 'glasf-bist';
  const answers: object = {
    projectDescription: 'glaf as a bist in January',
    projectName: PROJECT_NAME,
    projectScope: '@endemolshinegroup',
    version: '0.0.13',
  };

  describe('Generates a project from a folder that does not have the same name as the project', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, answers);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('correctly inserts prompt answers into package.json', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
        /"name":\sPROJECT_NAME|"version":\s"0.0.13"|"description":\s"glaf as a bist in January"/g,
      );
    });

    it('folder matching project name exists and is target directory', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME));
    });

    it('adds .git folder to project', () => {
      assert.file('.git');
    });
  });

  describe('Generates a project from a folder that has the same name as the project', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, answers);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('correctly inserts prompt answers into package.json', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, 'package.json'),
        /"name":\sPROJECT_NAME|"version":\s"0.0.13"|"description":\s"glaf as a bist in January"/g,
      );
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
      return generate(OUTPUT_PATH, {
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

  describe('Generates a public project correctly', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, {
        ...answers,
        isPublic: true,
      });
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies all files and public project files', function() {
      let templateReplacedFiles = files.common.map((filePath: string) =>
        replaceTemplatePrefix(filePath),
      );
      let templateReplacedPublicFiles = files.public.map((filePath: string) =>
        replaceTemplatePrefix(filePath),
      );

      assert.file([...templateReplacedFiles, ...templateReplacedPublicFiles]);
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
      return generate(OUTPUT_PATH, {
        ...answers,
        isPublic: false,
      });
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies all files and private project files', function() {
      let templateReplacedFiles = files.common.map((filePath: string) =>
        replaceTemplatePrefix(filePath),
      );
      let templateReplacedPrivateFiles = files.private.map((filePath: string) =>
        replaceTemplatePrefix(filePath),
      );

      assert.file([...templateReplacedFiles, ...templateReplacedPrivateFiles]);
    });

    it('generates an .npmrc with access=restricted', () => {
      assert.fileContent(
        path.join(OUTPUT_PATH, PROJECT_NAME, '.npmrc'),
        /access=restricted/g,
      );
    });
  });
});
