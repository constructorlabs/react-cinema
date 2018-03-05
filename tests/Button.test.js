import React from 'react';
import Button from '../src/Button';
import {shallow} from 'enzyme';

describe('Button component', () => {
  it('starts with a count of 0', () =>{
    const wrapper = shallow(<Button />);
    const text = wrapper.find('span').text();
    expect(text).toEqual('button has been clicked 0 times');
  });
});
