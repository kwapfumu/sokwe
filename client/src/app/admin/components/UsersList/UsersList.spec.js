import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UsersList from './UsersList';

configure({ adapter: new Adapter() });

function setup() {
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
      }],
    dispatch: jest.fn(),
  };

  const enzymeWrapper = mount(<UsersList {...props} />);

  return {
    props: props,
    enzymeWrapper: enzymeWrapper,
  };
}

describe('testing UsersList', () => {
  it('should render list of users', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('#usersListView')).to.have.lengthOf(1);
    expect(enzymeWrapper.find('ListGroup')).to.have.lengthOf(1);
    const listOfUsers = enzymeWrapper.find('ListGroup');
    listOfUsers.forEach((node) => {
      expect(node.hasClass('list-group-item')).to.equal(true);
    });
  });

  // it('should call componentDidMount', () => {});
});
