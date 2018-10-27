import AbstractGenerator from '../lib/AbstractGenerator';
import copyTemplates from '../lib/copyTemplates';
import files from './files';

export = class BuildGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options);
    this.initWithOptions(__dirname, options);

    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
    });
    this.option('isPublic', {
      description: 'Is this a public package?',
      type: Boolean,
    });
  }

  writing() {
    this.copyTemplates(files);
  }
};
