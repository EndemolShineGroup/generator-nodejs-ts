import { AbstractGenerator } from '../lib/AbstractGenerator';
import files from './files';

class NodeGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options, __dirname);

    this.option('projectScope', {
      description: 'NPM scope: ',
      type: String,
    });
    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
    });
    this.option('projectDescription', {
      description: 'Description: ',
      type: String,
    });
    this.option('version', {
      description: 'Version: ',
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

export = NodeGenerator;
