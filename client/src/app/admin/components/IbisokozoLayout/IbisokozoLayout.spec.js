import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IbisokozoLayout from './IbisokozoLayout';

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    // TODO: add some sokozo if i need to test more
    ibisokozo: [],
    dispatch: jest.fn(),
  };

  const enzymeWrapper = mount(<IbisokozoLayout {...props} />);

  return {
    props: props,
    enzymeWrapper: enzymeWrapper,
  };
}

describe('testing UsersList', () => {
  it('should render list of ibisokozo', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h2').text()).to.equal('This is Ibisoko layout');
    expect(enzymeWrapper.find('ListGroup')).to.have.lengthOf(1);
    const listOfIbisokozo = enzymeWrapper.find('ListGroup');
    listOfIbisokozo.forEach((node) => {
      expect(node.exists('#collapsible-panel-AdminIgisokozoPanel')).to.equal(true);
    });
  });

  // it('should call componentDidMount', () => {});
});
