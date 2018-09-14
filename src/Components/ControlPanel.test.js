import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './ControlPanel';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import {expect} from 'chai'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ControlPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});


