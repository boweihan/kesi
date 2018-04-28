import React from 'react';
import renderer from 'react-test-renderer';
import Home from 'src/Home';

it('renders without crashing', () => {
  const rendered = renderer.create(<Home />).toJSON();
  expect(rendered).toBeTruthy();
});
