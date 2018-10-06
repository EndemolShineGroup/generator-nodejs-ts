import path from 'path';
import rimraf from 'rimraf';
// @ts-ignore
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

import {
  Files,
  PrivateFiles,
  PublicFiles,
  replaceTemplatePrefix,
} from './templating';

describe('generation', () => {
  const PROJECT_NAME = 'glasf-bist';
  const answers: object = {
    projectDescription: 'glaf as a bist in January',
    projectName: PROJECT_NAME,
    projectScope: '@endemolshinegroup',
    version: '0.0.13',
  };

  describe('while generating from a folder that does not have the same name as the project', () => {
    beforeEach(async () => {
      // @ts-ignore
      return helpers
        .run(path.join(__dirname))
        .inDir(path.join(__dirname, 'tmp'))
        .withPrompts(answers);
    });

    afterEach(() => {
      rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('correctly inserts prompt answers into package.json', () => {
      assert.fileContent(
        path.join(__dirname, 'tmp', PROJECT_NAME, 'package.json'),
        /"name":\sPROJECT_NAME|"version":\s"0.0.13"|"description":\s"glaf as a bist in January"/g,
      );
    });

    it('folder matching project name exists and is target directory', () => {
      assert.file(path.join(__dirname, 'tmp', PROJECT_NAME));
    });
  });

  describe('while generating from a folder that has the same name as the project', () => {
    beforeEach(async () => {
      // @ts-ignore
      return helpers
        .run(path.join(__dirname))
        .inDir(path.join(__dirname, PROJECT_NAME))
        .withPrompts(answers);
    });

    afterEach(() => {
      rimraf.sync(path.join(__dirname, PROJECT_NAME));
    });

    it('correctly inserts prompt answers into package.json', () => {
      assert.fileContent(
        path.join(__dirname, PROJECT_NAME, 'package.json'),
        /"name":\sPROJECT_NAME|"version":\s"0.0.13"|"description":\s"glaf as a bist in January"/g,
      );
    });

    it('folder matching project name exists and is target directory', () => {
      assert.file(path.join(__dirname, PROJECT_NAME));
    });
  });

  describe('Public project structural integrity', () => {
    beforeEach(async () => {
      // @ts-ignore
      return helpers
        .run(path.join(__dirname))
        .inDir(path.join(__dirname, 'tmp'))
        .withPrompts({
          ...answers,
          isPublic: true,
        });
    });

    afterEach(() => {
      rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('copies all files and public project files', function() {
      let templateReplacedFiles = Files.map((filePath: string) =>
        replaceTemplatePrefix(filePath),
      );
      let templateReplacedPublicFiles = PublicFiles.map((filePath: string) =>
        replaceTemplatePrefix(filePath),
      );

      assert.file([...templateReplacedFiles, ...templateReplacedPublicFiles]);
    });
  });

  describe('Private project structural integrity', () => {
    beforeEach(async () => {
      // @ts-ignore
      return helpers
        .run(path.join(__dirname))
        .inDir(path.join(__dirname, 'tmp'))
        .withPrompts({
          ...answers,
          isPublic: false,
        });
    });

    afterEach(() => {
      rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('copies all files and private project files', function() {
      let templateReplacedFiles = Files.map((filePath: string) =>
        replaceTemplatePrefix(filePath),
      );
      let templateReplacedPrivateFiles = PrivateFiles.map((filePath: string) =>
        replaceTemplatePrefix(filePath),
      );

      assert.file([...templateReplacedFiles, ...templateReplacedPrivateFiles]);
    });
  });
});
