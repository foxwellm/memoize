import React from 'react';
import HomePage from '../Components/HomePage';
import { shallow } from 'enzyme';

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
      <HomePage />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})