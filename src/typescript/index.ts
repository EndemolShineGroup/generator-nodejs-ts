import { AbstractGenerator } from '../lib/AbstractGenerator';
import createFileFilter from '../lib/createFileFilter';
import files from './files';

class TypeScriptGenerator extends AbstractGenerator {
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
    this.fs.extendJSON(this.destinationPath('package.json'), {
      types: 'dist/index.d.ts',
      scripts: {
        prebuild: 'rimraf dist/',
        build: 'tsc',
        'build:docs':
          'rimraf docs/api && typedoc --out docs/api --target es6 --theme minimal --mode file src',
      },
    });

    let filesToCopy = files;

    // Exclude source examples
    if (!this.options.generateExamples) {
      const filter = createFileFilter('src/index.');
      filesToCopy = {
        common: files.common.filter(filter),
        private: files.private.filter(filter),
        public: files.public.filter(filter),
      };
    }

    this.copyTemplates(filesToCopy);
  }

  async install() {
    const dependencies: string[] = ['tslib'];
    const devDependencies: string[] = [
      '@types/jest',
      '@types/node',
      'rimraf',
      'ts-jest',
      'typedoc',
      'typescript',
    ];

    this.yarnInstall(dependencies);
    this.yarnInstall(devDependencies, { dev: true });
  }
}

export = TypeScriptGenerator;
