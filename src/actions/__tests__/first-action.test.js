// @flow

import firstAction from '../first-action';

describe('first-action', () => {
  it('should not error', () => {
    expect(() => firstAction({ ask: () => {} })).not.toThrow();
  });
});
