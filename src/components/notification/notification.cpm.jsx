import React, { useEffect, useState } from 'react';
import './notification.scss';

const Notification = ({ item, removeItem, index }) => {
	const [ show, setShow ] = useState({ show: false });
	useEffect(
		() => {
			const deley = index * 100;
			setTimeout(() => {
				if (item.expires) {
					setShow({ show: false });
					setTimeout(() => {
						removeItem(item);
					}, 1000);
				}
			}, item.expires);

			setTimeout(() => {
				setShow({ show: true });
			}, deley);
		},
		[ item, removeItem, index ]
	);
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
			<div className="notification-expiration" onClick={() => removeItem(item)}>
				{item.expires}
			</div>
		</div>
	);
};

export default Notification;
