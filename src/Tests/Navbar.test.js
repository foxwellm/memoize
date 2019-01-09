import React from 'react';
import Navbar from '../Components/Navbar';
import { shallow } from 'enzyme';

describe('Navbar', () => {
  let wrapper;
  const setSlideshowPageMock = jest.fn();
  const currentPage = 'homepage';
  const favorites = { string: ["concat", "charCodeAt"], array: ["every", "forEach"] }
  const event = {
    target: {
      dataset: {
        page: 'string'
      },
    }
  }

  beforeEach(() => {

    wrapper = shallow(
      <Navbar
        setSlideshowPage={setSlideshowPageMock}
        currentPage={currentPage}
        favorites={favorites}
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set active state of button and change to clicked page', () => {
    expect(wrapper.state('currentActivePage')).toEqual('homepage');
    wrapper.instance().changePage(event);
    expect(wrapper.state('currentActivePage')).toEqual('string');
  })

})