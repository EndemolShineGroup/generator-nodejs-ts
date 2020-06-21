import { AbstractGenerator } from '../lib/AbstractGenerator';
import files from './files';

class GitHooksGenerator extends AbstractGenerator {
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
    this.option('isPublic', {
      description: 'Is this a public package?',
      type: Boolean,
    });
    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
    });
  }

  async writing() {
    this.copyTemplates(files);

    this.fs.extendJSON(this.destinationPath('package.json'), {
      scripts: {
        'semantic-release': 'semantic-release',
      },
    });
  }

  async install() {
    const dependencies: string[] = [];
    const devDependencies: string[] = [
      '@endemolshinegroup/git-author-check',
      '@semantic-release/changelog',
      '@semantic-release/git',
      'husky',
      'lint-staged',
      'semantic-release',
    ];

    if (!this.options.isPublic) {
      devDependencies.push('@endemolshinegroup/git-author-check');
    }

    this.yarnInstall(dependencies);
    this.yarnInstall(devDependencies, { dev: true });
  }
}

export = GitHooksGenerator;
