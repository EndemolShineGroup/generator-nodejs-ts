import filterAndTrim from './filterAndTrim';

describe('#filterAndTrim', () => {
  it('prompt filter trims inputs with unnecessary whitespace', () => {
    expect(filterAndTrim('snopes    ')).toBe('snopes');
  });
});
