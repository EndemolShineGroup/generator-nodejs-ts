import prompts from './prompts';

describe('prompts', () => {
  it('returns an array', () => {
    expect(prompts).toBeInstanceOf(Array);
  });

  it('prompt filter trims inputs with unnecessary whitespace', () => {
    const filter = prompts[0].filter;

    if(filter) {
      expect(filter('snopes    ')).toBe('snopes');
    }

  });

});
