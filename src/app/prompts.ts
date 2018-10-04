import Generator from 'yeoman-generator';

const filter = (input: string): string => {
  return input.trim();
};

const prompts: Generator.Questions = [
  {
    type: 'input',
    name: 'projectScope',
    message: 'NPM scope: ',
    default: '@endemolshinegroup',
    filter,
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'Project Name: ',
    filter,
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Description: ',
    default: 'sick project...',
    filter,
  },
  {
    type: 'input',
    name: 'version',
    message: 'Version: ',
    default: '0.0.1',
    filter,
  },
  {
    type: 'confirm',
    name: 'isPublic',
    message: 'Is this a public package?',
  },
];

export default prompts;
