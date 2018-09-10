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
  console.log('logging ...', wrapper.find('TopBit').getElements())
  expect(wrapper.find('div')).to.have.lengthOf(1)
});
