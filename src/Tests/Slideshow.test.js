import React from 'react';
import Slideshow from '../Components/Slideshow';
import { shallow } from 'enzyme';
import data from '../Data/index';

describe('Slideshow', () => {
  let wrapper;
  const currentPage = 'string';
  const stringMethods = data.stringMethods;
  const currentIndex = 0;
  const favorites = { string: ["concat", "charCodeAt"], array: ["every", "forEach"] }
  const setFavoriteMock = jest.fn();
  const nextMethodMock = jest.fn();
  const prevMethodMock = jest.fn();


  beforeEach(() => {

    wrapper = shallow(
      <Slideshow
        currentMethods={[`${currentPage}Methods`]}
        favorites={favorites[`${currentPage}`] || []}
        setFavorite={setFavoriteMock}
        currentPage={currentPage}
        currentIndex={currentIndex}
        nextMethod={nextMethodMock}
        prevMethod={prevMethodMock}
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})