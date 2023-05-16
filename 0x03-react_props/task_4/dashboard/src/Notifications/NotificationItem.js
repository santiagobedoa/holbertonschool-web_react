import React from "react";
import './Notifications.css';
import PropTypes from 'prop-types';
import Notifications from "./Notifications";


function NotificationItem({ type, html, value }) {
	if (value) {
		return (<li data-notification-type={type}>{value}</li>)
	} else {
		return (<li dangerouslySetInnerHTML={html} data-notification-type={type}></li>)
	}
}

NotificationItem.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string
	})
};

NotificationItem.defaultProps = {
	type: 'default',
	value: '',
	html: {}
};

export default NotificationItem;

