import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props, state) => {
  return shallow(<App {...props} />)
}

const findAttrVal = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
}

it('renders without crashing', () => {
  const wrapper = setup();
  const component = findAttrVal(wrapper, "my-component-test-app");
  expect(component.length).toBe(1);
});
it('displays a counter', () => {
  const wrapper = setup();
  const component = findAttrVal(wrapper, "test-counter-h1");
  expect(component.length).toBe(1);
})
it('displays a button to be clicked', () => {
  const wrapper = setup();
  const component = findAttrVal(wrapper, "test-counter-button");
  expect(component.length).toBe(1);
})
it('increments the counter on button clicked', () => {

})
it('start the counter at 0', () => {

})
