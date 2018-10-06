import { Commit, Repository } from 'nodegit';
import path from 'path';
import rimraf from 'rimraf';
// @ts-ignore
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('git initialization', () => {
  describe('when choosing to initialize', () => {
    beforeEach(async () => {
      // @ts-ignore
      return helpers
        .run(path.join(__dirname))
        .inDir(path.join(__dirname, 'tmp'))
        .withPrompts({ useGit: true });
    });

    afterEach(() => {
      rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('adds .git folder to project', () => {
      assert.file('.git');
    });

    it('creates an initial commit containing all template files', async () => {
      let repo: Repository = await Repository.open('.git');
      let commit: Commit = await repo.getMasterCommit();
      expect(commit.message()).toBe('Initial commit');
    });
  });

  describe('when choosing not to initialize', () => {
    beforeEach(async () => {
      // @ts-ignore
      return helpers
        .run(path.join(__dirname))
        .inDir(path.join(__dirname, 'tmp'))
        .withPrompts({ useGit: false });
    });

    afterEach(() => {
      rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it("doesn't add .git folder to project", () => {
      assert.noFile('.git');
    });
  });
});
