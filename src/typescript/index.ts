import AbstractGenerator from '../lib/AbstractGenerator';
import files from './files';

export = class TypeScriptGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options);
    this.initWithOptions(__dirname, options);

    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
    });
  }

  writing() {
    this.copyTemplates(files);
  }
};
