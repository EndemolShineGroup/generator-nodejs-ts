import Generator from 'yeoman-generator';

import filterAndTrim from '../lib/filterAndTrim';

const prompts: Generator.Questions = [
  {
    filter: filterAndTrim,
    message: 'Project Name: ',
    name: 'projectName',
    type: 'input',
  },
  {
    default: true,
    message: 'Add TSLint configuration?',
    name: 'addTSLint',
    type: 'confirm',
  },
  {
    default: true,
    message: 'Add Prettier configuration?',
    name: 'addPrettier',
    type: 'confirm',
  },
];

export default prompts;
