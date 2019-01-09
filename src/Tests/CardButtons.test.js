import React from 'react';
import CardButtons from '../Components/CardButtons';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  const currentPage = 'string'
  const favorites = ["concat"]
  const setFavoriteMock = jest.fn();
  const name = 'concat'

  beforeEach(() => {

    wrapper = shallow(
      <CardButtons
        setFavorite={setFavoriteMock}
        currentPage={currentPage}
        favorites={favorites}
        name={name}
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})