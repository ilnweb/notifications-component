import React from 'react';
import './App.scss';
import NotificationsPannel from './components/notifications-pannel/notification-pannel.cmp';
import Notification from './components/notification/notification.cpm';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: true,
			notifications: [
				{
					id: 1321,
					type: 'text',
					title: 'Test notification',
					text: 'Test text notification',
					expires: 3600
				},
				{
					id: 4322,
					type: 'bonus',
					title: 'You win a bonus!',
					requirement: 'Deposit $50 to win',
					expires: 3600
				},
				{
					id: 5453,
					type: 'promotion',
					image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
					title: '%30 off on sports betting',
					link: 'https://www.google.com/'
				},
				{
					id: 5236,
					type: 'text',
					title: 'Test notification',
					text: 'Test text notification',
					expires: 5000
				}
			]
		};
	}

	componentDidMount() {}

	handleToggle = () => {
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen
		}));
	};

	totalNotifications = () => {
		const { notifications } = this.state;
		const count = notifications.filter((item) => item.type !== 'bonus');
		return count.length;
	};

	removeItem = (itemToRemove) => {
		const { notifications } = this.state;
		const filtered = notifications.filter((item) => item.id !== itemToRemove.id);
		this.setState({
			notifications: [ ...filtered ]
		});
	};

	render() {
		const { isOpen, notifications, show } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<h1>Notification Component</h1>
				</header>
				<div className="conatainer">
					<NotificationsPannel
						handleToggle={this.handleToggle}
						isOpen={isOpen}
						totalNotifications={this.totalNotifications()}
					>
						{notifications &&
							notifications.map((item, index) => (
								<Notification key={item.id} item={item} removeItem={this.removeItem} index={index} />
							))}
					</NotificationsPannel>
				</div>
			</div>
		);
	}
}
export default App;
