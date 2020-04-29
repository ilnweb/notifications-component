import React from 'react';
import './notifications-pannel.scss';
import Logo from '../../img/red-logo.png';

const NotificationsPannel = ({ children, handleToggle, isOpen, totalNotifications }) => (
	<div className="notifications-pannel">
		<div className="notifications-pannel_header"  onClick={handleToggle}>
      <img src={Logo} alt="" />
      <div className='notifications-pannel-total'>{totalNotifications}</div>
		</div>
		<div className={`notifications-pannel_body ${isOpen ? 'open' : ''}`}>{children}</div>
	</div>
);

export default NotificationsPannel;
