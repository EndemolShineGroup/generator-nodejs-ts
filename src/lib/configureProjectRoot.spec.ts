import configureProjectRoot from './configureProjectRoot';
import { FixedGenerator } from './types';

const genMock = ({
  options: {
    projectName: 'neym',
  },

  destinationRoot: jest.fn(() => {
    return process.cwd();
  }),
} as unknown) as FixedGenerator;

describe('#configureProjectRoot', () => {
  it('copies templates files', () => {
    configureProjectRoot(genMock);
    expect(genMock.destinationRoot).toHaveBeenCalled();
  });
});
