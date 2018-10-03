import templating, { FixedGenerator } from './templating';
const genMock = {
  answers: {
    projectName: 'neym',
    projectDescription: 'glaf your bists in Typescript',
    version: '1.0.0'
  },
  fs:  {
    copyTpl: jest.fn(),
  },
  destinationPath: jest.fn(),
  templatePath: jest.fn()
} as unknown as FixedGenerator;

describe('templating', () => {
  it('copyTemplate is called', () => {
    templating(genMock);
    expect(genMock.fs.copyTpl).toHaveBeenCalled();
    expect(genMock.templatePath).toHaveBeenCalled();
    expect(genMock.destinationPath).toHaveBeenCalled();
  });
});