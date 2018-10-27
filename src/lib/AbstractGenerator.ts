import path from 'path';

import Generator from 'yeoman-generator';

import configureProjectRoot from './configureProjectRoot';
import copyTemplates from './copyTemplates';

export interface FilesToCopy {
  common: string[];
  public: string[];
  private: string[];
}

export default abstract class AbstractGenerator extends Generator {
  public answers: Generator.Answers = {};
  public options: Generator.Answers = {};

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
