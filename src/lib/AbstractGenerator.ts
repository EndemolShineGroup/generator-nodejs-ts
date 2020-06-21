import path from 'path';

import Generator from 'yeoman-generator';

import configureProjectRoot from './configureProjectRoot';
import copyTemplates from './copyTemplates';

export interface FilesToCopy {
  common: string[];
  public: string[];
  private: string[];
}

export abstract class AbstractGenerator extends Generator {
  public answers: Generator.Answers = {};
  public options: Generator.Answers = {};

  constructor(args: string | string[], options: {}, generatorPath: string) {
    super(args, options);
    this.initWithOptions(generatorPath, options);
  }

  initWithOptions = (generatorPath: string, options: Generator.Answers) => {
    this.options = options;
    this.sourceRoot(path.join(generatorPath, 'templates'));
    this.configureProjectRoot();
  };

  configureProjectRoot = () => {
    configureProjectRoot(this);
  };

  copyTemplates = (files: FilesToCopy) => {
    copyTemplates(this, files);
  };
}
