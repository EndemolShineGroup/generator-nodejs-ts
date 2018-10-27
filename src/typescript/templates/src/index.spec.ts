import add from '.';

describe('#add', () => {
  it('should add two numbers together', () => {
    expect(add(2, 2)).toEqual(4);
  });
});
