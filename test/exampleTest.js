import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/app';

describe('App Component', () => {
  it('renders 1 searchbar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SearchBar)).to.have.length(1);
  });
});
