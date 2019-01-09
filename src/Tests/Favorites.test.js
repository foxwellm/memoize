import React from 'react';
import Favorites from '../Components/Favorites';
import { shallow } from 'enzyme';
import data from '../Data/index';

describe('App', () => {
  let wrapper;
  const favorites = { string: ["concat", "charCodeAt"], array: ["every", "forEach"] }
  let stringMethods = data.stringMethods
  let arrayMethods = data.arrayMethods
  const setFavoriteMock = jest.fn();

  const event = {
    target: {
      dataset: {
        type: 'string',
        name: 'concat'
      },
    }
  }

  const concatMethod = {
    'index': 2,
    'name': 'concat',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat',
    'syntax': 'str.concat(string2, string3, ..., stringN)',
    'example': `  var str1 = 'Hello';
  var str2 = 'World';

  console.log(str1.concat(' ', str2));
  // expected output: "Hello World"`,
    'Parameters': [
      { 'string2...stringN': 'Strings to concatenate to this string.' }
    ],
    'Return value': 'A new string containing the combined text of the strings provided.'
  }

  beforeEach(() => {

    wrapper = shallow(
      <Favorites
        favorites={favorites}
        stringMethods={stringMethods}
        arrayMethods={arrayMethods}
        setFavorite={setFavoriteMock}
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should create a popup of concat method when createPopup method is called on concat button', () => {
    expect(wrapper.state('popupType')).toEqual(null);
    expect(wrapper.state('popupMethod')).toEqual(null);
    wrapper.instance().createPopup(event);
    expect(wrapper.state('popupType')).toEqual('string');
    expect(wrapper.state('popupMethod')).toEqual(concatMethod);
  })
})