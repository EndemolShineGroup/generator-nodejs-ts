import BaseGenerator from 'yeoman-generator';

export type FixedGenerator = BaseGenerator & {
  answers?: BaseGenerator.Answers;
  options?: BaseGenerator.Answers;
};
