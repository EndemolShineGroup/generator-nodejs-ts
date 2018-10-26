import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import uuid from 'uuid/v4';
// @ts-ignore
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

const generate = (outputPath: string, answers: object) => {
  // @ts-ignore
  return helpers
    .run(__dirname)
    .inDir(outputPath)
    .withPrompts(answers);
};

describe('app:git-hooks', () => {
  const PROJECT_NAME = 'glasf-bist';
  const answers: object = {
    isPublic: true,
    projectName: PROJECT_NAME,
  };

  describe('Generates GitHub files', () => {
    const OUTPUT_PATH = path.join(os.tmpdir(), uuid());

    beforeEach(async () => {
      return generate(OUTPUT_PATH, answers);
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
});
