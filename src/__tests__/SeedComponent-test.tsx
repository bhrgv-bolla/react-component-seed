jest.unmock('../SeedComponent');

import * as React from 'react';

import { shallow } from 'enzyme';
import SeedComponent from '../SeedComponent';

describe('SeedComponent', () => {
  it('should work', () => {
    const wrapper = shallow(
      <SeedComponent />
    );

    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('Hay.');
  });

  it('should render all the card components', () => {
    const wrapper = shallow(
      <SeedComponent text="It works!" />
    );

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('It works!');
  });
});
