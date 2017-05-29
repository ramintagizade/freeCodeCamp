import React from 'react'
import ReactDOM from 'react-dom'
class LayoutInput extends React.Component {
  constructor(){
    super();
    this.state = {
      value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\n *As you can see it is powered by a marked function which is another library *\n\n Text attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe good ---old days ---in\nEngland.\n\n *[Ramin Taghizada](https://www.freecodecamp.com/ramintagizade)*'


    };
  }
  handleChange(event) {
    this.setState({
      value:event.target.value
    });
  }
  render() {
    return (
      <div>
        <div className="input">
          <textarea value= {this.state.value} className="textarea" onChange={this.handleChange.bind(this)}> </textarea>
        </div>
         <div className="output">
           <LayoutOutput value={this.state.value}/>
         </div>
      </div>
    );
  }
}
class LayoutOutput extends React.Component {

  render(){
    var raw = {__html:marked(this.props.value,{sanitize: true})};
    return (
        <div dangerouslySetInnerHTML={raw}>

        </div>
    );
  }
}
ReactDOM.render(<LayoutInput/>,document.getElementById('app'));
