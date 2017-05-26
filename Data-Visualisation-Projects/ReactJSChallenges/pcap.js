class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
	}
	handleChange = (event) => {
		this.setState({
			inputValue: event.target.value
		});
	}
  render() {
    return (
	   	<div>
	   		<GetInput
	   			input={this.state.inputValue}
	   			handleInput={this.handleChange}/>
	   		<RenderInput
	   			input={this.state.inputValue}/>
	   	</div>
    );
  }
};

class GetInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Get Input:</h3>
				<input
					value={this.props.input}
					onChange={this.props.handleInput}/>
			</div>
		);
	}
};

class RenderInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Input Render:</h3>
				<p>{this.props.input}</p>
			</div>
		);
	}
};
