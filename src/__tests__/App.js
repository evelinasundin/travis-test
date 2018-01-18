import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App /> without user', () => {
    const wrapper = shallow(<App user="" />); 
    expect(wrapper.find(".user")).not.toEqual('');
});

it('should render <App /> with user', () => {
    const user = "evelinasundin@hotmail.se";
    const wrapper = shallow(<App user={user} />);
    expect(wrapper.find(".user").text()).toContain("evelinasundin@hotmail.se")
});

it('call the internal method loginSuccessful', () => {
    const email = "evelinasundin@hotmail.se";
    const wrapper = mount(<App user={email} />); 
    wrapper.instance().loginSuccessful(email); 
    expect(wrapper.state().user).toBe(email);
});

it('call the internal method logout', () => {
    const email = "evelinasundin@hotmail.se";
    const wrapper = mount(<App user={email} />);
    wrapper.instance().loginSuccessful(email); 
    wrapper.instance().logout();
    expect(wrapper.state().user).toBe("");
});