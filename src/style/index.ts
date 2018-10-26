import path from 'path';
import Generator from 'yeoman-generator';

import copyTemplates from '../lib/copyTemplates';
import files from './files';

export = class StyleGenerator extends Generator {
  public options: Generator.Answers = {};

  constructor(args: string | string[], options: {}) {
    super(args, options);
    this.options = options;
    this.sourceRoot(path.join(__dirname, 'templates'));
    this.configureProjectRoot();

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
    copyTemplates(this, files);
  }

  configureProjectRoot() {
    const targetDirName = this.destinationRoot()
      .split(path.sep)
      .pop();
    if (targetDirName !== this.options.projectName) {
      this.destinationRoot(
        path.join(this.destinationRoot(), this.options.projectName),
      );
    }
  }
};
