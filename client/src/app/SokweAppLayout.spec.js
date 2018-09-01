import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SokweAppLayout from './SokweAppLayout';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  // eslint-disable-next-line no-undef
  const enzymeWrapper = mount(<SokweAppLayout {...props} />);

  return {
    // eslint-disable-next-line no-undef
    props: props,
    enzymeWrapper: enzymeWrapper,
  };
}

describe('testing SokweAppLayout', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div').hasClass('sokweAppContainer')).toBe(true);
    const navbarSokweProps = enzymeWrapper.find('NavbarSokwe').props();
    expect(navbarSokweProps.isAdmin).toBe(false);
    expect(navbarSokweProps.isLoggedIn).toBe(false);
    expect(navbarSokweProps.showAdminNavbarFeatures).toBe(false);
    const contentDisplayAreaProps = enzymeWrapper.find('NavbarSokwe').props();
    expect(contentDisplayAreaProps.isAdmin).toBe(false);
    expect(contentDisplayAreaProps.isLoggedIn).toBe(false);
  });
});
