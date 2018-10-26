import path from 'path';
import Generator from 'yeoman-generator';

import copyTemplates from '../lib/copyTemplates';
import files from './files';
import prompts from './prompts';

export default class NodeJsTypeScriptGenerator extends Generator {
  public answers: Generator.Answers = {};

  constructor(args: string | string[], opts: {}) {
    super(args, opts);
    this.sourceRoot(path.join(__dirname, 'templates'));
  }

  async initializing() {
    this.log('A few questions about your project...');
    this.log('Note: Project Name will also be used for Git URLs');
  }

  async prompting() {
    this.answers = await this.prompt(prompts);

    this.composeWith(require.resolve('../build'), this.answers);
    this.composeWith(require.resolve('../gitHooks'), {
      ...this.answers,
      addPrettier: true,
      addTSLint: true,
    });
    this.composeWith(require.resolve('../github'), this.answers);
    this.composeWith(require.resolve('../style'), this.answers);
    this.configureProjectRoot();
  }

  async writing() {
    copyTemplates(this, files);
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
      this.destinationRoot(
        path.join(this.destinationRoot(), this.answers.projectName),
      );
    }
  }
}
