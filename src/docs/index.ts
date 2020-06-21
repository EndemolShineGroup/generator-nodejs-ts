import { AbstractGenerator } from '../lib/AbstractGenerator';
import files from './files';

class DocsGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options, __dirname);

    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
    });
  }

  writing() {
    this.copyTemplates(files);
  }
}

export = DocsGenerator;
