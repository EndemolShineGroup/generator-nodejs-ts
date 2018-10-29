import AbstractGenerator from '../lib/AbstractGenerator';
import createFileFilter from '../lib/createFileFilter';
import files from './files';

export = class TypeScriptGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options, __dirname);

    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
    });
    this.option('generateExamples', {
      default: true,
      description: 'Generate example files?',
      type: Boolean,
    });
  }

  writing() {
    if (this.options.generateExamples) {
      this.copyTemplates(files);
      return;
    }

    const filter = createFileFilter('src/index.');

    this.copyTemplates({
      common: files.common.filter(filter),
      private: files.private.filter(filter),
      public: files.public.filter(filter),
    });
  }
};
