import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import {expect} from 'chai'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('use Enzyme', () => {
  const wrapper = shallow(<App/>);
  console.log('logging 1 ...', wrapper.find('ControlPanel').props())
  console.log('logging 2 ...', wrapper.instance().updateRotate)
  console.log('logging 3 ...', wrapper.props())
  expect(wrapper.find('div')).to.have.lengthOf(2)
  expect(wrapper.find('TopBit')).to.have.lengthOf(1)
  expect(wrapper.find('TopBit').props().rotate).to.equal(false)
  expect(wrapper.find('ControlPanel')).to.have.lengthOf(1)
  expect(wrapper.find('ControlPanel').props().rotate).to.equal(false)
  expect(wrapper.find('ControlPanel').props().updateRotate).to.equal(wrapper.instance().updateRotate)
  // expect(wrapper.find('ControlPanel').props().updateRotate).to.equal(wrapper.instance().updateRotate2)
  
});
