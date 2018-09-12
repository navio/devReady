import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/app';

// smoke test - test if it render
test('it should render', async () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve()); 
  shallow(<App />);
});