
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  //if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

// if your contect render correctly or not
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

// if increament button exist or not
test("render button increament exist or not", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

// if display counter exits or not
test("renders counter display", () => {
  const wrapper = setup();
  const display = findByTestAttr(wrapper, 'display-counter');
  expect(display.length).toBe(1)
});

// if counter start with Zero or not
test("renders counter start form Zero", () => {
  const wrapper = setup();
  const counter = wrapper.state('counter');
  expect(counter).toBe(0);
});


test("clicking button increaments counter display", () => {
  const counter = 11;
  const wrapper = shallow(<App />);
  wrapper.setState({ counter });

  // find button and simulate click event
  const button = wrapper.find('[data-test="increment-button"]');
  button.simulate('click');

  // find counter display
  const display = wrapper.find('[data-test="display-counter"]');
  expect(display.text()).toContain(counter + 1)

})
