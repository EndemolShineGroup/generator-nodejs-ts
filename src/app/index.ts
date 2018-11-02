import path from 'path';
import Generator from 'yeoman-generator';

import AbstractGenerator from '../lib/AbstractGenerator';
import configureProjectRoot from '../lib/configureProjectRoot';
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

    this.composeWith(require.resolve('../repo'), this.answers);
    this.composeWith(require.resolve('../node'), this.answers);
    this.composeWith(require.resolve('../docs'), this.answers);
    this.composeWith(require.resolve('../typescript'), this.answers);
    this.composeWith(require.resolve('../build'), this.answers);
    this.composeWith(require.resolve('../process'), {
      ...this.answers,
      addPrettier: true,
      addTSLint: true,
    });
    this.composeWith(require.resolve('../github'), this.answers);
    this.composeWith(require.resolve('../style'), {
      ...this.answers,
      addPrettier: true,
      addTSLint: true,
    });
    this.composeWith(require.resolve('../services'), this.answers);
    configureProjectRoot((this as unknown) as AbstractGenerator);
  }

  async install() {
    this.yarnInstall();
    if (this.answers.useGit) {
      this.spawnCommandSync('git', ['init', '--quiet']);
    }
  }
}
