import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

describe('Basic React Tests - <App />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBeTruthy();
	});
});
