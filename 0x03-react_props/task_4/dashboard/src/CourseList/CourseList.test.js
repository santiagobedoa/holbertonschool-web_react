import React from "react";
import { shallow } from 'enzyme';
import CourseList from "./CourseList";

describe('Basic React Tests - <CourseList />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render the 5 different rows', () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.find('CourseListRow')).toHaveLength(5);
	});
});
