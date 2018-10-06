import { Commit, Index, Oid, Repository, Signature } from 'nodegit';
import Generator from 'yeoman-generator';
import prompts from './prompts';

class GitGenerator extends Generator {
  public answers: Generator.Answers = {};

  constructor(args: string | string[], opts: {}) {
    super(args, opts);
  }

  async initializing() {
    //
  }

  async prompting() {
    this.answers = await this.prompt(prompts);
  }

  async writing() {
    //
  }

  async end() {
    if (this.answers.useGit) {
      let repo: Repository = await Repository.init('.', 0);
      let index: Index = await repo.refreshIndex();
      await index.addAll('.', 0);
      await index.write();
      let oid: Oid = await index.writeTree();
      let signature = Signature.default(repo);
      let commitId = await repo.createCommit(
        'HEAD',
        signature,
        signature,
        'Initial commit',
        oid,
        [],
      );

      let commit: Commit = await repo.getMasterCommit();
      let message: string = commit.message();
      this.log(
        `Commit ${commitId} successfully created with message: ${message}`,
      );
    }
  }
}

// Have to do this because of `yeoman-generator` being a piece of guano
export = GitGenerator;
