import AbstractGenerator from '../lib/AbstractGenerator';
import files from './files';

export = class NodeGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options);
    this.initWithOptions(__dirname, options);

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
};
