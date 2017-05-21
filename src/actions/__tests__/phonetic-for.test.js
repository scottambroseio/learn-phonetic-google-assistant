// @flow

import phoneticFor from '../phonetic-for';

describe('phonetic-for', () => {
  it('should not error', () => {
    expect(() =>
      phoneticFor({ tell: () => {}, getArgument: () => '' })
    ).not.toThrow();
  });
});
