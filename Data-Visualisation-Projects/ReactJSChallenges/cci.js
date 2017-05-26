class ControlledInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
	}
	handleInput = (event) => {
		this.setState({
			input: event.target.value
		});
	}
	render() {
  	return (
	    <div>
        <input
        	value={this.state.input}
        	onChange={this.handleInput} />
        <p>Input: {this.state.input}</p>
	    </div>
    );
  }
};
