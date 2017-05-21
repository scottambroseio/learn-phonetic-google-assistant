// @flow

const firstAction = require('../first-action');

describe('first-action', () => {
  it('should not error', () => {
    expect(firstAction).not.toThrow();
  });
});
