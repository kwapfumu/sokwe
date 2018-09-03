import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminCentralView from './AdminCentralView';

configure({ adapter: new Adapter() });

function setup() {
  // eslint-disable-next-line no-undef
  const enzymeWrapper = shallow(<AdminCentralView {...props} />);

  return {
    // eslint-disable-next-line no-undef
    props: props,
    enzymeWrapper: enzymeWrapper,
  };
}

describe('testing AdminCentralView', () => {
  it('should display a welcoming msg', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h3').text()).toEqual('this is admin central view');
  });
});
