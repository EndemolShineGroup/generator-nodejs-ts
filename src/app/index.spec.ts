import path from 'path';
import rimraf from 'rimraf';
// @ts-ignore
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

import { Files, PrivateFiles, PublicFiles } from './templating';

describe('generation', () => {

  const PROJECT_SCOPE = '@endemolshinegroup';
  const PROJECT_NAME = 'glasf-bist';

  describe('while generating from a folder that does not have the same name as the project', () => {
    beforeEach( async () => {
      // @ts-ignore
      return helpers.run( path.join(__dirname))
        .inDir( path.join(__dirname, 'tmp') )
        .withPrompts( {
          projectScope: PROJECT_SCOPE,
          projectName: PROJECT_NAME,
          projectDescription: 'glaf as a bist in January',
          version: '0.0.13'
        });
    });

    afterEach( () => {
      rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('correctly inserts prompt answers into package.json', () => {
      assert.fileContent(
        path.join(__dirname, 'tmp', PROJECT_NAME, 'package.json'),
        /"name":\sPROJECT_NAME|"version":\s"0.0.13"|"description":\s"glaf as a bist in January"/g
      );
    });

    it('folder matching project name exists and is target directory', () => {
      assert.file( path.join(__dirname, 'tmp', PROJECT_NAME ) );
    });
  });

  describe('while generating from a folder that has the same name as the project', () => {
    beforeEach( async () => {
      // @ts-ignore
      return helpers.run( path.join(__dirname))
        .inDir( path.join(__dirname, PROJECT_NAME) )
        .withPrompts( {
          projectScope: PROJECT_SCOPE,
          projectName: PROJECT_NAME,
          projectDescription: 'glaf as a bist in January',
          version: '0.0.13'
        });
    });

    afterEach( () => {
      rimraf.sync(path.join(__dirname, PROJECT_NAME));
    });

    it('correctly inserts prompt answers into package.json', () => {
      assert.fileContent(
        path.join(__dirname, PROJECT_NAME, 'package.json'),
        /"name":\sPROJECT_NAME|"version":\s"0.0.13"|"description":\s"glaf as a bist in January"/g
      );
    });

    it('folder matching project name exists and is target directory', () => {
      assert.file( path.join(__dirname, PROJECT_NAME ) );
    });
  });

  describe('Public project structural integrity', () => {
    beforeEach( async () => {
      // @ts-ignore
      return helpers.run( path.join(__dirname))
        .inDir( path.join(__dirname, 'tmp') )
        .withPrompts( {
          projectScope: PROJECT_SCOPE,
          projectName: PROJECT_NAME,
          projectDescription: 'glaf as a bist in January',
          version: '0.0.13',
          isPublic: true
        });
    });

    afterEach( () => {
      rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('copies all files and public project files', function () {
      assert.file( [...Files, ...PublicFiles] );
    });
  });

  describe('Private project structural integrity', () => {
    beforeEach( async () => {
      // @ts-ignore
      return helpers.run( path.join(__dirname))
        .inDir( path.join(__dirname, 'tmp') )
        .withPrompts( {
          projectScope: PROJECT_SCOPE,
          projectName: PROJECT_NAME,
          projectDescription: 'glaf as a bist in January',
          version: '0.0.13',
          isPublic: false
        });
    });

    afterEach( () => {
      rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('copies all files and private project files', function () {
      assert.file( [...Files, ...PrivateFiles] );
    });
  });

});
