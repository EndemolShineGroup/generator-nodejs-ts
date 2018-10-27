import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import uuid from 'uuid/v4';
// @ts-ignore
import assert from 'yeoman-assert';

import { generateWithOptions } from '../setupTests';

describe('app:github', () => {
  const PROJECT_NAME = 'glasf-bist';
  const options = {
    isPublic: true,
    projectName: PROJECT_NAME,
  };

  describe('Generates GitHub files', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('copies all files', () => {
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, 'CODEOWNERS'));
      assert.file(path.join(OUTPUT_PATH, PROJECT_NAME, '.github/settings.yml'));
      assert.file(
        path.join(
          OUTPUT_PATH,
          PROJECT_NAME,
          '.github/PULL_REQUEST_TEMPLATE.md',
        ),
      );
      assert.file(
        path.join(
          OUTPUT_PATH,
          PROJECT_NAME,
          '.github/ISSUE_TEMPLATE/bug_report.md',
        ),
      );
      assert.file(
        path.join(
          OUTPUT_PATH,
          PROJECT_NAME,
          '.github/ISSUE_TEMPLATE/documentation_improvement.md',
        ),
      );
      assert.file(
        path.join(
          OUTPUT_PATH,
          PROJECT_NAME,
          '.github/ISSUE_TEMPLATE/feature_request.md',
        ),
      );
    });
  });

  describe('Generates a valid Probot Settings file for public projects', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generateWithOptions(__dirname, OUTPUT_PATH, options);
    });

    afterEach(() => {
      rimraf.sync(OUTPUT_PATH);
    });

    it('generates a valid .github/settings.yml', () => {
      [/private: false/g, /has_issues: true/g, /has_downloads: true/g].forEach(
        (regex) => {
          assert.fileContent(
            path.join(OUTPUT_PATH, PROJECT_NAME, '.github', 'settings.yml'),
            regex,
          );
        },
      );
    });
  });

  describe('Generates a valid Probot Settings file for private projects', () => {
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

    it('generates a valid .github/settings.yml', () => {
      [/private: true/g, /has_issues: false/g, /has_downloads: false/g].forEach(
        (regex) => {
          assert.fileContent(
            path.join(OUTPUT_PATH, PROJECT_NAME, '.github', 'settings.yml'),
            regex,
          );
        },
      );
    });
  });
});
