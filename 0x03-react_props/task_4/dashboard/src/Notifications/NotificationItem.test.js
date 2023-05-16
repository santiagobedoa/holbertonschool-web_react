import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('Basic React Tests - <NotificationItem />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render the correct html, type and value props', () => {
		const wrapper = shallow(<NotificationItem type='default' value='test' />);
		expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
		expect(wrapper.find('li').text()).toEqual('test');
	});

	it('Should render the correct html, html prop', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
		expect(wrapper.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
	});
});
