import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props, state) => {
  const wrapper = shallow(<App {...props} />);
  if (state) { wrapper.setState(state) }
  return wrapper;
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
it('start the counter at 0', () => {
  const wrapper = setup();
  const component = wrapper.state('counter');
  expect(component).toBe(0);
})
it('increments the counter on button clicked', () => {
  const counter = 3;
  const wrapper = setup(null, { counter });
  const component = findAttrVal(wrapper, "test-counter-button");
  component.simulate('click')
  wrapper.update();

  const displayCounter = findAttrVal(wrapper, "test-counter-h1");
  expect(displayCounter.text()).toContain(counter + 1)
})
it('decrements the counter when clicked', () => {
  const counter = 2;
  const wrapper = setup(null, {counter});
  const component = findAttrVal(wrapper, "test-deccounter-button");

  component.simulate('click');
  wrapper.update();

  const displayCounter = findAttrVal(wrapper, "test-counter-h1");
  expect(displayCounter.text()).toContain(counter-1);
})

it('displays and error when counter goes below 0', () => {
  const counter = 0;
  const wrapper = setup(null, { counter })
  const buttonComponent = findAttrVal(wrapper, "test-deccounter-button");

  buttonComponent.simulate('click');
  wrapper.update();

  const errorComponent = findAttrVal(wrapper, 'error-counter-p')
  expect(errorComponent.text()).toBeTruthy();
})

it('should clear the error when incrementing', () => {
  const counter = 0;
  const wrapper = setup(null, {counter});

  const decButtonComponent = findAttrVal(wrapper, 'test-deccounter-button');
  decButtonComponent.simulate('click');
  wrapper.update();
  
  const buttonComponent = findAttrVal(wrapper, 'test-counter-button');
  buttonComponent.simulate('click');
  wrapper.update();

  const errorComponent = findAttrVal(wrapper, 'error-counter-p');
  expect(errorComponent.text()).toBeFalsy();
})
