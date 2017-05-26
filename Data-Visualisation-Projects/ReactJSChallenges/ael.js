class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		};
	}
	componentDidMount() {
		// change code below this line
    document.addEventListener('keydown', this.handleKeyPress);
		// change code above this line
	}
	componentWillUnmount() {
		// change code below this line
		document.removeEventListener('keydown', this.handleKeyPress);
		// change code above this line
	}
	handleEnter = () => {
		this.setState({
			message: this.state.message + 'You pressed the enter key! '
		});
	}
	handleKeyPress = (event) => {
    if (event.keyCode === 13) {
    	this.handleEnter();
    }
  }
  render() {
    return (
			<div>
				<h1>{this.state.message}</h1>
			</div>
    );
  }
};
