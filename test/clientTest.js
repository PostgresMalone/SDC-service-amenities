import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Amenities from '../client/components/amenities.jsx';
import imagesDefault from '../client/components/imagesDefault.jsx';
import imagesList from '../client/components/imagesList.jsx';

describe('Amenities', () => {
  it('renders on the page', () => {
    const wrapper = shallow(<Amenities />);
    const component = wrapper.shallow();

    expect(toJson(component)).toMatchSnapshot();
  });

  it()
})
