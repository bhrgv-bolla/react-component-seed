jest.unmock('../SeedComponent');

import React from 'react';
import { shallow } from 'enzyme';

describe('SeedComponent', () => {
  it('should work', () => {
    const SeedComponent = require('../SeedComponent');
    const wrapper = shallow(
      <SeedComponent />
    );
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('Hay.');
  });

  it('should render all the card components', () => {
    const SeedComponent = require('../SeedComponent');
    const wrapper = shallow(
      <SeedComponent text="It works!" />
    );

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('It works!');
  });
});
