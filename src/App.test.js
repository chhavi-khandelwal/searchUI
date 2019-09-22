import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './dataStorage/tours.js';
import { NORESULTSTRING } from './shared/constants/tour';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { expect } from 'chai';

configure({adapter: new Adapter()});

const wrapper = mount(<App/>);

describe('App is mounted correctly', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Tours displayed on dashboard', () => {
  it('shows all tours if no search made', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('.tile')).to.have.lengthOf(data.tours.length);
  });

  it('shows all tours when blanks entered', () => {
    const searchTerm = '   ';
    wrapper.find('.search__bar input').simulate('change', { target: { value: searchTerm } });
    wrapper.find('.icon--search').simulate('click');
    expect(wrapper.find('.tile')).to.have.lengthOf(14);
  });

  it('shows filtered results when search made', () => {
    const searchTerm = 'Berlin';
    wrapper.find('.search__bar input').simulate('change', { target: { value: searchTerm } });
    wrapper.find('.icon--search').simulate('click');
    expect(wrapper.find('.tile')).to.have.lengthOf(8);
  });

  it('shows no result string when match is found', () => {
    const searchTerm = 'shdkshkshdk';
    wrapper.find('.search__bar input').simulate('change', { target: { value: searchTerm } });
    wrapper.find('.icon--search').simulate('click');
    expect(wrapper.find('.tile')).to.have.lengthOf(0);
    expect(wrapper.find('.no-show').text()).to.equal(NORESULTSTRING);
  });

  it('shows filtered results and does not show No Result String', () => {
    const searchTerm = 'german';
    wrapper.find('.search__bar input').simulate('change', { target: { value: searchTerm } });
    wrapper.find('.icon--search').simulate('click');
    expect(wrapper.find('.tile')).to.have.lengthOf(3);
    expect(wrapper.find('no-show').exists()).to.equal(false);
  });
});
