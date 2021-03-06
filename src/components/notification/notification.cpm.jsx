import React, { useEffect, useState } from 'react';
import './notification.scss';

const Notification = ({ item, removeItem, index }) => {
  //use state hook to save value the show hide of the notification
  const [show, setShow] = useState({ show: false });
  //use effect hook to trigger the set timeout of the notification
	useEffect(
		() => {
			const deley = index * 100;
			setTimeout(() => {
				if (item.expires) {
					setShow({ show: false });
					setTimeout(() => {
						removeItem(item);
					}, 400);
				}
			}, item.expires);

			setTimeout(() => {
				setShow({ show: true });
			}, deley);
		},
		[ item, removeItem, index ]
  );
   //notification ajusted to all 3 types of notifications
	return (
		<div className={`notification ${show.show ? 'show' : ''}`}>
			<div className="notification-left_content">
				{item.image ? <img src={item.image} alt="" /> : ''}
				<div className="notification-body">
					<h3>{item.title}</h3>
					{item.type !== 'promotion' ? (
						<p>{item.type === 'text' ? item.text : item.requirement}</p>
					) : (
						<a href={item.link} trarget="blank">
							<p>Check Now</p>
						</a>
					)}
				</div>
			</div>
			<div className="notification-expiration">
        {item.expires && <span>{item.expires / 1000} s.</span>} 
			</div>
		</div>
	);
};

export default Notification;
