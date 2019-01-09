import React from 'react';
import FavoritesButton from '../Components/FavoritesButton';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  const createPopupMock = jest.fn();
  const method = {
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
      <FavoritesButton
        key={1}
        methodType={'string'}
        arrayMethods={method.name}
        createPopup={createPopupMock}
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})