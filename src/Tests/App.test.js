import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  const event = {
    target: {
      dataset: {
        page: 'string'
      },
      parentElement: {
        dataset: {
          type: 'string',
          method: 'concat'
        }
      }
    }
  }

  beforeEach(() => {
    wrapper = shallow(
      <App />);

    wrapper.setState({
      favorites: {}
    });
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should save favorites to state and localStorage', () => {
    expect(wrapper.state('favorites')).toEqual({});
    wrapper.instance().setFavorite(event);
    expect(wrapper.state('favorites')).toEqual({string: ['concat']});
    expect(JSON.parse(localStorage.favorites)).toEqual({ string: ['concat'] });
  })

  it('should increase state of currentIndex by 1 when nextMethod is called', () => {
    expect(wrapper.state('currentIndex')).toEqual(0);
    wrapper.instance().nextMethod();
    expect(wrapper.state('currentIndex')).toEqual(1);
  })

  it('should decrease state of currentIndex by 1 when prevMethod is called', () => {
    wrapper.instance().nextMethod();
    expect(wrapper.state('currentIndex')).toEqual(1);
    wrapper.instance().prevMethod();
    expect(wrapper.state('currentIndex')).toEqual(0);
  })

  it('should change currentPage depending on what was selected and reset state.currentIndex to 0', () => {
    wrapper.instance().nextMethod();
    expect(wrapper.state('currentPage')).toEqual('homepage');
    wrapper.instance().setSlideshowPage(event);
    expect(wrapper.state('currentPage')).toEqual('string');
    expect(wrapper.state('currentIndex')).toEqual(0);
  })

})