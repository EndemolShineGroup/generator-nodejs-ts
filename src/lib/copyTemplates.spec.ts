import AbstractGenerator from './AbstractGenerator';
import copyTemplates from './copyTemplates';

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
} as unknown) as AbstractGenerator;

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
