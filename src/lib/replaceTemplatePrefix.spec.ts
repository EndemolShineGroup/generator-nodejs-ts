import replaceTemplatePrefix from './replaceTemplatePrefix';

describe('#replaceTemplatePrefix', () => {
  it('replaces template prefixes with .', () => {
    expect(replaceTemplatePrefix('_snopes')).toBe('.snopes');
  });

  it('replaces template prefixes with a provided replacement', () => {
    expect(replaceTemplatePrefix('_snopes', '!')).toBe('!snopes');
  });
});
