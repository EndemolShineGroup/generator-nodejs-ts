import { AbstractGenerator } from './AbstractGenerator';
import configureProjectRoot from './configureProjectRoot';

const genMock = ({
  options: {
    projectName: 'neym',
  },

  destinationRoot: jest.fn(() => {
    return process.cwd();
  }),
} as unknown) as AbstractGenerator;

describe('#configureProjectRoot', () => {
  it('copies templates files', () => {
    configureProjectRoot(genMock);
    expect(genMock.destinationRoot).toHaveBeenCalled();
  });
});
