import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Test0Stateless from '../Test0Stateless';

describe('Test0Stateless', () => {
  it('should render correctly', () => {
    const rendered = renderer.create(<Test0Stateless />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('should be able to see props', () => {
    const tree = shallow(<Test0Stateless testProp="oof" />);
    console.warn(tree.props());
  });
});