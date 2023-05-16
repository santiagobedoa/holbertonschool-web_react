import { shallow } from 'enzyme';
import Notifications from './Notifications';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('Basic React Tests - <Notifications />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render NotificationItem elements', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('NotificationItem')).toBeTruthy();
	});

	it('Should render the right html into the first NotificationItem element', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('NotificationItem').first().html()).toEqual(
			'<li data-notification-type="default">New course available</li>'
		);
	});

	it('Should render the correct string', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('.Notifications p').text()).toEqual(
			('Here is the list of notifications')
		);
	});

	it('When displayDrawer is false - Should check that the menu item is being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem')).toBeTruthy();
	});

	it('When displayDrawer is false - Should check that the div.Notifications is not being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('div.Notifications')).toHaveLength(0);
	});

	it('When displayDrawer is true - Should check that the menu item is being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('.menuItem')).toBeTruthy();
	});

	it('When displayDrawer is true - Should check that the div.Notifications is not being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('div.Notifications')).toHaveLength(1);
	});
});
