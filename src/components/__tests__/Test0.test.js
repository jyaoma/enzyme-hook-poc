import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Test0 from '../Test0';

describe('Test0', () => {
  it('should render correctly', () => {
    const rendered = renderer.create(<Test0/>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('should render again', () => {
    const wrapper = shallow(<Test0 />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to see props', () => {
    const tree = shallow(<Test0 testProp="oof" />);
    // console.warn(tree.props().testProp);
    // expect(tree.props().testProp).toEqual('oof');
    console.warn(tree.props());
  });
});