import files from '../gitHooks/files';
import copyTemplates from './copyTemplates';
import { FixedGenerator } from './types';

const genMock = ({
  answers: {
    projectDescription: 'glaf your bists in Typescript',
    projectName: 'neym',
    version: '1.0.0',
  },
  fs: {
    copyTpl: jest.fn(),
  },

  destinationPath: jest.fn(),
  templatePath: jest.fn(),
} as unknown) as FixedGenerator;

describe('#copyTemplates', () => {
  it('copies templates files', () => {
    copyTemplates(genMock, {
      common: ['foo.bar', 'bz.foo'],
      private: [],
      public: [],
    });
    expect(genMock.fs.copyTpl).toHaveBeenCalled();
    expect(genMock.templatePath).toHaveBeenCalled();
    expect(genMock.destinationPath).toHaveBeenCalled();
  });
});
