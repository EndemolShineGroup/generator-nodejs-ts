import AbstractGenerator from '../lib/AbstractGenerator';
import files from './files';

export = class StyleGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options, __dirname);

    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
    });
    this.option('isPublic', {
      description: 'Is this a public package?',
      type: Boolean,
    });
    this.option('addPrettier', {
      description: 'Add Prettier configuration?',
      type: Boolean,
    });
    this.option('addTSLint', {
      description: 'Add TSLint configuration?',
      type: Boolean,
    });
  }

  async writing() {
    this.copyTemplates(files);
    const pkgJson = {
      devDependencies: {
        '@commitlint/cli': '^7',
        '@commitlint/config-conventional': '^7',
        '@endemolshinegroup/cz-github': '^1',
        '@endemolshinegroup/cz-jira-smart-commit': '^1',
        '@endemolshinegroup/prettier-config': '^1',
        '@endemolshinegroup/tslint-config': '^1',
        commitizen: '^3',
        prettier: '^1',
        tslint: '^5',
        'tslint-config-prettier': '^1',
        'tslint-eslint-rules': '^5',
      },
      scripts: {
        commit: 'git-cz',
        lint: `tslint -p tsconfig.json -t codeFrame 'src/**/*.ts' -e 'src/**/*.spec.ts'`,
      },
    };

    if (this.options.isPublic) {
      delete pkgJson.devDependencies['@endemolshinegroup/cz-jira-smart-commit'];
    } else {
      delete pkgJson.devDependencies['@endemolshinegroup/cz-github'];
    }

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  async install() {
    this.yarnInstall();
  }
};
