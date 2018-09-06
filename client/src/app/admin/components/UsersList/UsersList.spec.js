import React from 'react';
import { mount } from 'enzyme';
import UsersList from './UsersList';

const props = {
  users: [
    {
      email: "wtv@pff.com",
      username: "wtv",
      userRole: "regularUser",
      lastAddedSokozo: { igisokozo: "d", inyishu: "1" },
      numberOfSokozoAdded: 1,
      playedSokozosIds: [{ _id: "1245" }],
      scores: [
        {
          gameId: 1,
          date: Date.now,
          score: 1,
        },
      ],
      createdOn: Date.now,
    },
  ],
  dispatch: jest.fn(),
};

describe('testing UsersList', () => {
  it('should render list of users', () => {
    const enzymeWrapper = mount(<UsersList {...props} />);
    expect(enzymeWrapper.find('ListGroup').length).toBe(1);
    const listOfUsers = enzymeWrapper.find('ListGroup');
    listOfUsers.forEach((node) => {
      expect(node.hasClass('list-group-item')).toEqual(true);
    });
    enzymeWrapper.unmount();
  });

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(UsersList.prototype, 'componentDidMount');
    // eslint-disable-next-line no-unused-vars
    const enzymeWrapper = mount(<UsersList {...props} />);
    // enzymeWrapper.instance().methodName();
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
    enzymeWrapper.unmount();
  });
});
