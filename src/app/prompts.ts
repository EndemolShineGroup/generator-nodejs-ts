
const filter = (input : string) => {
  return input.trim();
};

export default [
  {
    type    : 'input',
    name    : 'projectScope',
    message : 'NPM scope: ',
    default : '@endemolshinegroup',
    filter,
  },
  {
    type    : 'input',
    name    : 'projectName',
    message : 'Project Name: ',
    filter
  },
  {
    type    : 'input',
    name    : 'projectDescription',
    message : 'Description: ',
    default : 'sick project...',
    filter,
  },
  {
    type    : 'input',
    name    : 'version',
    message : 'Version: ',
    default : '1.0.0',
    filter,
  },
  {
    type    : 'confirm',
    name    : 'isPublic',
    message : 'Is this a public package?',
  }
];