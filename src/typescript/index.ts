import path from 'path';
import Generator from 'yeoman-generator';

import configureProjectRoot from '../lib/configureProjectRoot';
import copyTemplates from '../lib/copyTemplates';
import files from './files';

export = class TypeScriptGenerator extends Generator {
  public options: Generator.Answers = {};

  constructor(args: string | string[], options: {}) {
    super(args, options);
    this.options = options;
    this.sourceRoot(path.join(__dirname, 'templates'));
    configureProjectRoot(this);

    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
    });
  }

  writing() {
    copyTemplates(this, files);
  }
};
