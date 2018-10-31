import AbstractGenerator from '../lib/AbstractGenerator';
import files from './files';

export = class GitHooksGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options, __dirname);

    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
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
  }

  async install() {
    const pkgJson = {
      devDependencies: {
        '@semantic-release/changelog': '^3',
        '@semantic-release/git': '^7',
        husky: '^1',
        'lint-staged': '^8',
        'semantic-release': '^15',
      },
      scripts: {
        'semantic-release': 'semantic-release',
      },
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.yarnInstall();
  }
};
