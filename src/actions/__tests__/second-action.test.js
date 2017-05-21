// @flow

import secondAction from '../second-action';

describe('second-action', () => {
  it('should not error', () => {
    expect(() => secondAction({ ask: () => {} })).not.toThrow();
  });
});
