import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminLayout from './AdminLayout';

configure({ adapter: new Adapter() });

function setup() {
  // eslint-disable-next-line no-undef
  const enzymeWrapper = mount(<AdminLayout {...props} />);

  return {
    // eslint-disable-next-line no-undef
    props: props,
    enzymeWrapper: enzymeWrapper,
  };
}

describe('testing AdminLayout', () => {
  it('should render self and subcomponents AdminLeftSideNavigation & AdminCentralView', () => {
    const { enzymeWrapper } = setup();
    const AdminLeftSideNavigation = enzymeWrapper.find('AdminLeftSideNavigation');
    expect(AdminLeftSideNavigation).toBe(true);
    const AdminCentralView = enzymeWrapper.find('AdminCentralView');
    expect(AdminCentralView).toBe(true);
  });
});
