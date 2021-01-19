/* eslint-disable no-undef */
import React from 'react';
import {mount, shallow} from 'enzyme';

import HeaderLinks from '../src/components/HeaderLinks.jsx';

describe('<HeaderLinks />', () => {
  it('should render a div', () => {
    const wrapper = mount(<HeaderLinks />);
    expect(wrapper.find('div')).toExist();
  });
  it('should not render a list', () => {
    const wrapper = shallow(<HeaderLinks />);
    expect(wrapper.find('ul')).not.toExist();
  });
});
