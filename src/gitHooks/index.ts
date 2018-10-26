import path from 'path';
import Generator from 'yeoman-generator';

import copyTemplates from '../lib/copyTemplates';
import files from './files';
import prompts from './prompts';

export = class GitHooksGenerator extends Generator {
  public answers: Generator.Answers = {};

  constructor(args: string | string[], options = {}) {
    super(args, options);
    this.sourceRoot(path.join(__dirname, 'templates'));
  }

  async prompting() {
    this.answers = {
      ...this.options,
      ...(await this.prompt(prompts)),
    };
    this.configureProjectRoot();
  }

  async writing() {
    copyTemplates(this, files);
  }

  configureProjectRoot() {
    const targetDirName = this.destinationRoot()
      .split(path.sep)
      .pop();
    if (targetDirName !== this.answers.projectName) {
      this.destinationRoot(
        path.join(this.destinationRoot(), this.answers.projectName),
      );
    }
  }
};
