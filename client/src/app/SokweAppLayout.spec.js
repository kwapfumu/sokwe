import React from 'react';
import { mount } from 'enzyme';
import SokweAppLayout from './SokweAppLayout';
import NavbarSokwe from './navbar/components/NavbarSokwe';
import ContentDisplayArea from './contentDisplayArea/components/ContentDisplayArea';

describe('testing SokweAppLayout', () => {
  it('should render self and subcomponents', () => {
    const enzymeWrapper = mount(<SokweAppLayout />);
    expect(enzymeWrapper.find('div').hasClass('sokweAppContainer')).toEqual(true);
    const navbarSokweProps = enzymeWrapper.find(NavbarSokwe).props();
    expect(navbarSokweProps.isAdmin).toBe(false);
    expect(navbarSokweProps.isLoggedIn).toBe(false);
    expect(navbarSokweProps.showAdminNavbarFeatures).toBe(false);
    const contentDisplayAreaProps = enzymeWrapper.find(ContentDisplayArea).props();
    expect(contentDisplayAreaProps.isAdmin).toBe(false);
    expect(contentDisplayAreaProps.isLoggedIn).toBe(false);
    expect(enzymeWrapper.find('footer')).toBe(true);
    enzymeWrapper.unmount();
  });
});
