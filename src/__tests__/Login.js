import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login';

it('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({ email : "evelina.se", password : "hejhej" }); 
  wrapper.find('[data-test="form"]').simulate('submit'); 
  expect(wrapper.find('.error').text()).toEqual("Wrong password or email");

});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({ email : "evelinasundin@hotmail.se", password : "hejEvelina8" }); 
  wrapper.find('[data-test="form"]').simulate('submit'); 
  expect(wrapper.find('.success').text()).toEqual("Logged in");

});

it('handle inputfield', () => {
  const fakeLogin = jest.fn(); 
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const email = 'evelinasundin@hotmail.se';
  wrapper.find('input[type="email"]').simulate('change', {target: {name: "email", value: email}});
  expect(wrapper.state().email).toBe(email);
});