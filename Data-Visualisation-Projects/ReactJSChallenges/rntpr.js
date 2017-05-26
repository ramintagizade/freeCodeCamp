class Parent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true
		}
	}
	toggleDisplay = () => {
		this.setState({
			display: !this.state.display
		});
	}
  render() {
    return (
	   	<div>
	   		<button onClick={this.toggleDisplay}>Toggle Display</button>
	   		<Child display={this.state.display}/>
	   	</div>
    );
  }
};

class Child extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// change code below this line
		if (this.props.display) {
			return <h1>Display!</h1>
		} else {
			return null;
		}
	}
}
