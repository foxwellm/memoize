import React from 'react';
import Card from '../Components/Card';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  const method = {
    'index': 0,
    'name': 'concat',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
    'mutator': false,
    'iterator': false,
    'syntax': 'var new_array = old_array.concat(value1, value2, ..., valueN)',
    'example': `  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];

  console.log(array1.concat(array2));
  // expected output: Array ["a", "b", "c", "d", "e", "f"]`,
    'Parameters': [
      { 'valueN': 'Arrays and/or values to concatenate into a new array. If valueN is undefined, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.' }
    ],
    'Return': 'A new Array instance.'
  }
  const currentPage = 'string'
  const favorites = ["concat"]
  const setFavoriteMock = jest.fn();
  const cardNumber = 0
  const key = 1;

  beforeEach(() => {

    wrapper = shallow(
      <Card
        method={method}
        key={key}
        setFavorite={setFavoriteMock}
        currentPage={currentPage}
        favorites={favorites}
        cardNumber={cardNumber}
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})