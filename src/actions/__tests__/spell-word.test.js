// @flow

import spellWord from '../spell-word';

describe('spell-word', () => {
  it('should generate a correct response', () => {
    const appMock = { tell: jest.fn(), getArgument: () => 'cat' };
    const appMock2 = { tell: jest.fn(), getArgument: () => 'dandelion' };

    spellWord(appMock);
    spellWord(appMock2);

    expect(appMock.tell.mock.calls[0][0]).toMatchSnapshot();
    expect(appMock2.tell.mock.calls[0][0]).toMatchSnapshot();
  });
});
