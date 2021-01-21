/* eslint-disable no-undef */
import React from 'react';
import {mount, shallow} from 'enzyme';

import App from '../src/components/App.jsx';

describe('<App />', () => {
  it('should render a div', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div')).toExist();
  });
  it('should not render a list', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('ul')).not.toExist();
  });
});
