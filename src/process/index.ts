import AbstractGenerator from '../lib/AbstractGenerator';
import files from './files';

export = class GitHooksGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options);
    this.initWithOptions(__dirname, options);

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
};
