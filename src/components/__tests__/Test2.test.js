import React from 'react';
// import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';
import { act } from '@testing-library/react'

import Test2 from '../Test2';

jest.mock('axios');

describe('Test2', () => {
  it('should render correctly', () => {
    const rendered = renderer.create(<Test2 />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('should start off empty', () => {
    axios.get.mockResolvedValue({data: {all: [{text:'The oldest cat video on YouTube dates back to 1894.'}]}})
    // let tree = mount(<Test2 />);
    // const container = tree.find('.cat-facts__container');

    // expect(container.props().children).toHaveLength(0);
  });
});