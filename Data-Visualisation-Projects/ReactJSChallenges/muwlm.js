class Dialog extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillReceiveProps(nextProps) {
		console.log(this.props, nextProps);
	}
	componentWillUpdate() {
		console.log('Component is about to update...');
	}
	componentDidUpdate() {
		console.log('Component re-rendered');
	}
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'First Message'
		};
	}
	changeMessage = () => {
		this.setState({
			message: 'Second Message'
		});
	}
  render() {
    return (
			<div>
				<button onClick={this.changeMessage}>Update</button>
				<Dialog message={this.state.message}/>
			</div>
    );
  }
};
