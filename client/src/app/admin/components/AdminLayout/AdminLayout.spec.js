import React from 'react';
import { shallow } from 'enzyme';
import AdminLayout from './AdminLayout';
import AdminLeftSideNavigation from '../AdminLeftSideNavigation/AdminLeftSideNavigation';
import AdminCentralView from '../AdminCentralView/AdminCentralView';

describe('testing AdminLayout', () => {
  it('should render self and subcomponents AdminLeftSideNavigation & AdminCentralView', () => {
    const enzymeWrapper = shallow(<AdminLayout />);
    // eslint-disable-next-line max-len,react/jsx-key
    expect(enzymeWrapper.contains([<AdminLeftSideNavigation />, <AdminCentralView />])).toEqual(true);
  });
});
