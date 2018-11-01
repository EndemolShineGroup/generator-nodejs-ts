import AbstractGenerator from '../lib/AbstractGenerator';
import files from './files';

export = class GitHooksGenerator extends AbstractGenerator {
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
  }

  async install() {
    const pkgJson = {
      devDependencies: {
        '@endemolshinegroup/git-author-check': '^1',
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


    if (this.options.isPublic) {
      delete pkgJson.devDependencies['@endemolshinegroup/git-author-check'];
    }

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.yarnInstall();
  }
};
