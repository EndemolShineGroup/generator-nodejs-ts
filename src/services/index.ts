import { AbstractGenerator } from '../lib/AbstractGenerator';
import files from './files';

class ServicesGenerator extends AbstractGenerator {
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
  }

  writing() {
    this.copyTemplates(files);
  }
}

export = ServicesGenerator;
