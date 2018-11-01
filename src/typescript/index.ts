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

  async writing() {
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

  async install() {
    const pkgJson = {
      dependencies: {
        tslib: '^1.9.3',
      },
      devDependencies: {
        '@types/jest': '^23',
        '@types/node': '^10',
        rimraf: '^2',
        'ts-jest': '^23',
        typedoc: '^0.13.0',
        typescript: '^3',
      },
      scripts: {
        prebuild: 'rimraf dist/',

        build: 'tsc',
        'build:docs':
          'rimraf docs/api && typedoc --out docs/api --target es6 --theme minimal --mode file src',
      },
      types: 'dist/index.d.ts',
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.yarnInstall();
  }
};
