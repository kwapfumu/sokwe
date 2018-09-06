import React from 'react';
import { shallow } from 'enzyme';
import AdminCentralView from './AdminCentralView';

describe('testing AdminCentralView', () => {
  it('should display a welcoming msg', () => {
    const enzymeWrapper = shallow(<AdminCentralView />);
    expect(enzymeWrapper.find('Col').hasClass('adminCentralView')).toEqual(true);
    expect(enzymeWrapper.find('h3').text()).toEqual('this is admin central view');
  });
});
