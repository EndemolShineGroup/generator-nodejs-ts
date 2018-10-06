import Generator from 'yeoman-generator';

const prompts: Generator.Questions = [
  {
    type: 'confirm',
    name: 'useGit',
    message: 'Initialize repository with Git ?',
  },
];

export default prompts;
