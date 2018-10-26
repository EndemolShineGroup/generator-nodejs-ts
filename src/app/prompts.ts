import Generator from 'yeoman-generator';

import filterAndTrim from '../lib/filterAndTrim';

const prompts: Generator.Questions = [
  {
    default: '@endemolshinegroup',
    filter: filterAndTrim,
    message: 'NPM scope: ',
    name: 'projectScope',
    type: 'input',
  },
  {
    filter: filterAndTrim,
    message: 'Project Name: ',
    name: 'projectName',
    type: 'input',
  },
  {
    default: 'A NodeJS project written in TypeScript 🙏',
    filter: filterAndTrim,
    message: 'Description: ',
    name: 'projectDescription',
    type: 'input',
  },
  {
    default: '0.0.1',
    filter: filterAndTrim,
    message: 'Version: ',
    name: 'version',
    type: 'input',
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
