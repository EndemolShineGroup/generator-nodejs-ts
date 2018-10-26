import Generator from 'yeoman-generator';

const filter = (input: string): string => {
  return input.trim();
};

const prompts: Generator.Questions = [
  {
    default: '@endemolshinegroup',
    message: 'NPM scope: ',
    name: 'projectScope',
    type: 'input',

    filter,
  },
  {
    message: 'Project Name: ',
    name: 'projectName',
    type: 'input',

    filter,
  },
  {
    default: 'A NodeJS project written in TypeScript 🙏',
    message: 'Description: ',
    name: 'projectDescription',
    type: 'input',

    filter,
  },
  {
    default: '0.0.1',
    message: 'Version: ',
    name: 'version',
    type: 'input',

    filter,
  },
  {
    message: 'Is this a public package?',
    name: 'isPublic',
    type: 'confirm',
  },
  {
    default: true,
    message: 'Initialize repository with Git?',
    name: 'useGit',
    type: 'confirm',
  },
];

export default prompts;
