import React, { Fragment }from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';

function Notifications({ displayDrawer }) {
	return (
		<Fragment>
			<div className="menuItem">
				Your notifications
			</div>
			{ displayDrawer &&
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
			}
		</Fragment>
	);
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
	displayDrawer: false
};

export default Notifications;
