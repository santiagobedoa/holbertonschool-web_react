import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

describe('Basic React Tests - <App />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should contain the Notifications component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Notifications')).toHaveLength(1);
	});

	it('Should contain the Header component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Header')).toHaveLength(1);
	});

	it('Should contain the Login component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Login')).toHaveLength(1);
	});

	it('Should contain the Footer component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Footer')).toHaveLength(1);
	});
});
