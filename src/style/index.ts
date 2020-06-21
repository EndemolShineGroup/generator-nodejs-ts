import { AbstractGenerator } from '../lib/AbstractGenerator';
import files from './files';

class StyleGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options, __dirname);

    this.option('addPrettier', {
      description: 'Add Prettier configuration?',
      type: Boolean,
    });
    this.option('addTSLint', {
      description: 'Add TSLint configuration?',
      type: Boolean,
    });
    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
    });
    this.option('isPublic', {
      description: 'Is this a public package?',
      type: Boolean,
    });
  }

  async writing() {
    this.copyTemplates(files);

    this.fs.extendJSON(this.destinationPath('package.json'), {
      scripts: {
        commit: 'git-cz',
        lint:
          "tslint -p tsconfig.json -t codeFrame 'src/**/*.ts' -e 'src/**/*.spec.ts'",
      },
    });
  }

  async install() {
    const dependencies: string[] = [];
    const devDependencies: string[] = [
      '@commitlint/cli',
      '@commitlint/config-conventional',
      this.options.isPublic
        ? '@endemolshinegroup/cz-github'
        : '@endemolshinegroup/cz-jira-smart-commit',
      '@endemolshinegroup/prettier-config',
      '@endemolshinegroup/tslint-config',
      'commitizen',
      'prettier',
      'tslint',
      'tslint-config-prettier',
      'tslint-eslint-rules',
    ];
    this.yarnInstall(dependencies);
    this.yarnInstall(devDependencies, { dev: true });
  }
}

export = StyleGenerator;
