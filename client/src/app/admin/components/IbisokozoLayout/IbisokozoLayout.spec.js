import React from 'react';
import { mount } from 'enzyme';
import IbisokozoLayout from './IbisokozoLayout';

const props = {
  // TODO: add some sokozo if i need to test more
  ibisokozo: [],
  dispatch: jest.fn(),
  getState: jest.fn(),
  history: {},
};

describe('testing IbisokozoLayout', () => {
  it('should render list of ibisokozo', () => {
    const enzymeWrapper = mount(<IbisokozoLayout {...props} />);
    expect(enzymeWrapper.find('h2').text()).toEqual('This is Ibisoko layout');
    expect(enzymeWrapper.find('ListGroup').length).toBe(1);
    const listOfIbisokozo = enzymeWrapper.find('ListGroup');
    listOfIbisokozo.forEach((node) => {
      expect(node.exists('#collapsible-panel-AdminIgisokozoPanel')).toEqual(true);
    });
    enzymeWrapper.unmount();
  });

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(IbisokozoLayout.prototype, 'componentDidMount');
    // eslint-disable-next-line no-unused-vars
    const enzymeWrapper = mount(<IbisokozoLayout {...props} />);
    // enzymeWrapper.instance().methodName();
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
    enzymeWrapper.unmount();
  });
});
