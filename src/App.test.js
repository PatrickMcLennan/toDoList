import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {theToggler} from App;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Value passed needs to be a Boolean'), () => {
  expect(theToggler(val)).toBe(Boolean);
}