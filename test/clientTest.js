import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import toJson from 'enzyme-to-json';
import Amenities from '../client/components/amenities.jsx';
import imagesDefault from '../client/components/imagesDefault.jsx';
import imagesList from '../client/components/imagesList.jsx';

describe('Amenities', () => {
  it('renders on the page', () => {
    const wrapper = shallow(<Amenities />);
    expect(toJson(wrapper.shallow())).toMatchSnapshot();
  });
})
