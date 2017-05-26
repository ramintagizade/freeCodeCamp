
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{
					username: 'Jeff',
					online: true
				},
				{
					username: 'Alan',
					online: false
				},
				{
					username: 'Mary',
					online: true
				},
				{
					username: 'Jim',
					online: false
				},
				{
					username: 'Sara',
					online: true
				},
				{
					username: 'Laura',
					online: true
				}
			]
		}
	}
  render() {
  	const usersOnline = this.state.users.filter(user => {
  		return user.online;
  	});
  	const renderOnlineUsers = usersOnline.map(user => {
  		return (
  			<li key={user.username}>{user.username}</li>
  		);
  	});
    return (
	   	<div>
	   		<h1>Current Online Users:</h1>
	   		<ul>
					{renderOnlineUsers}
				</ul>
	   	</div>
    );
  }
};
