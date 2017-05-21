// @flow

import phoneticFor from '../phonetic-for';

describe('phonetic-for', () => {
  it('should generate a correct response', () => {
    const appMock = { tell: jest.fn(), getArgument: () => 'b' };
    const appMock2 = { tell: jest.fn(), getArgument: () => 'C' };

    phoneticFor(appMock);
    phoneticFor(appMock2);

    expect(appMock.tell.mock.calls[0][0]).toMatchSnapshot();
    expect(appMock2.tell.mock.calls[0][0]).toMatchSnapshot();
  });
});
