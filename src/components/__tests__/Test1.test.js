import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Test1 from '../Test1';

describe('Test1', () => {
  it('should render correctly', () => {
    const rendered = renderer.create(<Test1 />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('can read props', () => {
    const tree = shallow(<Test1 testProp={'oof'} />);
    expect(tree.props().testProp).toEqual('oof');
  });

  // xit('can read state', () => {
  //   const tree = mount(<Test1 testProp={'oof'} />);
  //   // console.warn(tree.state());
  //   console.warn(tree.debug());
  // });

  it('can find stuff inside', () => {
    const tree = mount(<Test1 testProp={'oof'}/>);
    const checkbox = tree.find('.my-checkbox');
    expect(checkbox.props().checked).toBe(false);
  });

  it('can make changes', () => {
    const tree = mount(<Test1 testProp={'oof'}/>);
    const checkbox = tree.find('.my-checkbox');
    checkbox.simulate('change');

    tree.update();
    expect(tree.find('.my-checkbox').props().checked).toBe(true);
  });
});