class Leaderboard extends React.Component{
  constructor(){
    super();
    this.state= {
      data: [],
      recent: true,
      hover:false
    };
    this.toggleAll = this.toggleAll.bind(this);
    this.toggleRecent = this.toggleRecent.bind(this);
  };
  getRecentData(self,callback){
    const url = self.state.recent ? 'https://fcctop100.herokuapp.com/api/fccusers/top/recent':'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    fetch(url).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function(data) {
      callback(data);
    });
  }
  componentWillMount(){
    var tmp = [];
    const self = this;
    this.getRecentData(self,function(response){
      for(var i=0;i<response.length;i++){
        tmp.push({id:i+1,img:response[i].img,username:response[i].username,recent:response[i].recent,alltime:response[i].alltime});
      }
      self.setState({data:tmp});
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.recent !== this.state.recent) {
        console.log(this.state.recent);
        var tmp = [];
        const self = this;
        this.getRecentData(self,function(response){
          for(var i=0;i<response.length;i++){
            tmp.push({id:i+1,img:response[i].img,username:response[i].username,recent:response[i].recent,alltime:response[i].alltime});
          }
          self.setState({data:tmp});
        });
    }
  }
  toggleRecent(){
    this.setState({recent:true});
  };
  toggleAll(){
    this.setState({recent:false});
  };

  render(){
    var styleimg = {'verticalAlign':'middle',width:'30px',height:'30px'};
    var styletable = {borderCollapse: 'collapse'};
    var styletr = {background:'white'};
    var styleempty = {};
    var style1 = {color:'white',background:'green',textAlign:'center',fontSize:'25px'};
    var stylenum = {width:'60px',textAlign:'left',border: '1px solid #bdbebd'};
    var stylename={width:'450px',textAlign:'left',border: '1px solid #bdbebd'};
    var stylepoint30={width:'400px',textAlign:'center',border: '1px solid #bdbebd'};
    var stylepointall={width:'300px',textAlign:'center',border: '1px solid #bdbebd'};
    var indent = [];
    if(this.state && this.state.data.length>0){
      var tmp = this.state.data;
      indent = tmp.map(function(i){
      return (
          <tr key={i.id} style={i.id%2 ? styletr:styleempty}>
            <td style={stylenum}> {i.id}</td>
          <td style={stylename} >  <a  href={"https://www.freecodecamp.com/"+i.username} target="_blank">  <img src={''+i.img+''} style={styleimg}/> { i.username} </a></td>
            <td  style={stylepoint30}>{i.recent}</td>
            <td  style={stylepointall}>{i.alltime}</td>
          </tr>
         );
      });
    }
    return (
      <div>
        <div style={style1} className="leaderboard-title"> <img  src="https://www.freecodecamp.com/design-style-guide/downloads/freeCodeCamp-alternative.png"/> Leaderboard</div>
      <div className="board">
        <table style={styletable}>
          <tbody>
          <tr>
            <th style={stylenum}>#</th>
            <th style={stylename}>Camper Name</th>
          <th style={stylepoint30} onClick={this.toggleRecent}>Points in past 30 days {this.state.recent && <i className="fa fa-toggle-down"></i>}</th>
        <th style={stylepointall} onClick={this.toggleAll}>All time points {!this.state.recent && <i className="fa fa-toggle-down"></i>}</th>
          </tr>
        </tbody>
          <tbody>
            {indent}
          </tbody>
        </table>
      </div>
      </div>
    )
  }
}
ReactDOM.render(<Leaderboard />, document.getElementById('app'));
