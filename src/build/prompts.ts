import Generator from 'yeoman-generator';

import filterAndTrim from '../lib/filterAndTrim';

const prompts: Generator.Question[] = [
  {
    filter: filterAndTrim,
    message: 'Project Name: ',
    name: 'projectName',
    type: 'input',
  },
  {
    message: 'Is this a public package?',
    name: 'isPublic',
    type: 'confirm',
  },
];

export default prompts;
