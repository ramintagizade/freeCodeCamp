class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			submit: ''
		};
	}
	handleChange = (event) => {
		this.setState({
			input: event.target.value
		});
	}
	handleSubmit = () => {
		this.setState({
			submit: this.state.input
		});
	}
	render() {
  	return (
	    <div>
        <input
        	value={this.state.input}
        	onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit!</button>
        <h1>{this.state.submit}</h1>
	    </div>
    );
  }
};
