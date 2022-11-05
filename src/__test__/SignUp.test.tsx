/**
 * node_modules packages should always be addded to the section
 * denoted as node modules, while other imports should be added to
 * the section denoted as app created, this helps in organization
 * of import statements <3
 */

//node_modules
import React from 'react';
import renderer from 'react-test-renderer'

//app created
import SignUp from '../pages/SignUp'

test('renders Sign up form', () => {
  const tree = renderer
    .create(<SignUp />)
    .toJSON();
  expect(tree).toMatchSnapshot()
});
