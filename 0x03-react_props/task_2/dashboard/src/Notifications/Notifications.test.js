import { shallow } from 'enzyme';
import Notifications from './Notifications';
import React from 'react';

describe('Basic React Tests - <Notifications />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render NotificationItem elements', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('NotificationItem')).toBeTruthy();
	});

	it('Should render the right html into the first NotificationItem element', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('NotificationItem').first().html()).toEqual(
			'<li data-notification-type="default">New course available</li>'
		);
	});

	it('Should render the correct string', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('.Notifications p').text()).toEqual(
			('Here is the list of notifications')
		);
	});
});
