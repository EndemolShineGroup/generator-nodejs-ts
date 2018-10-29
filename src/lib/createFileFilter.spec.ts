import createFileFilter from './createFileFilter';

const FILES = ['foo', 'bar', 'src/hello.ts', 'hello.ts', 'src/hello.spec.ts'];

describe('#createFileFilter', () => {
  let filter: (fileName: string) => boolean;

  beforeEach(() => {
    filter = createFileFilter('src/hello.');
  });

  it('creates a simple file filter', () => {
    expect(FILES.filter(filter)).toHaveLength(3);
  });
});
