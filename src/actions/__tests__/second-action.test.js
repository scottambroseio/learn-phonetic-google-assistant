// @flow

const secondAction = require('../second-action');

describe('second-action', () => {
  it('should not error', () => {
    expect(secondAction).not.toThrow();
  });
});
