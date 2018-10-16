import path from 'path';
import Generator from 'yeoman-generator';

import prompts from './prompts';
import templating from './templating';

export default class EndemolShineGroupGenerator extends Generator {
  public answers: Generator.Answers = {};

  constructor(args: string | string[], opts: {}) {
    super(args, opts);
    this.sourceRoot(path.join(__dirname, 'templates'));
  }

  async initializing() {
    this.log('A few questions about your project...');
    this.log('Note: Project Name will also be used for git urls');
  }

  async prompting() {
    this.answers = await this.prompt(prompts);
    this.configureProjectRoot();
  }

  async writing() {
    templating(this);
  }

  async install() {
    this.yarnInstall();
    if (this.answers.useGit) {
      this.spawnCommandSync('git', ['init', '--quiet']);
    }
  }

  configureProjectRoot() {
    const targetDirName = this.destinationRoot()
      .split(path.sep)
      .pop();
    if (targetDirName !== this.answers.projectName) {
      this.destinationRoot(this.answers.projectName);
    }
  }
}
