import React from 'react';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';

function Notifications() {
	return (
		<div className="Notifications">
			<button style={{background: 'transparent', float: 'right'}} aria-label='Close' onClick={() => console.log('Close button has been clicked')} >
				<img src={closeIcon} alt="close-icon" style={{width: '20px'}} />
			</button>
			<p>Here is the list of notifications</p>
			<ul>
				<NotificationItem type="default" value="New course available" />
				<NotificationItem type="urgent" value="New resume available" />
				<NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
			</ul>
		</div>
	);
}

export default Notifications;
