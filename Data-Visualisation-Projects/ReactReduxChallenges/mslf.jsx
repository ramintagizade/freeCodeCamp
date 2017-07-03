class DisplayMessages extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      input: '',
      messages: []
    }
	}
	handleChange(e){
  	this.setState({
    	input : e.target.value
    });
  }
  submitMessage(){
    console.log(this.state.messages);
  	this.setState({
    	messages: this.state.messages.concat(this.state.input),
      input : ''
    });
  }
  render() {
    var messages = this.state.messages.map(function(message){
    	return <ul><li>{message}</li></ul>
    });
    return (
    	<div>
        <h2>Type in a new Message:</h2>
				<input  value={this.state.input} type="text" onChange={this.handleChange.bind(this)}/>
        <button onClick={this.submitMessage.bind(this)}></button>
        {messages}
    	</div>
    );
  }
};
