const ADD_RECIPE = 'ADD_RECIPE';
const UPDATE_RECIPE = 'UPDATE_RECIPE';
const DELETE_RECIPE = 'DELETE_RECIPE';
const FIRE_MODAL = 'FIRE_MODAL';
const logger = reduxLogger();
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;
const {applyMiddleware} = Redux;
const thunk = ReduxThunk.default;
const middleware = applyMiddleware(thunk,logger);

function actionAddRecipe(recipe_name,recipe_ingredient){
  return {
    type: ADD_RECIPE,
    id: recipe_name,
    payload: { id: recipe_name, ingredient: recipe_ingredient}
  }
}
const actionUpdateRecipe = (recipe_name,recipe_ingredient) => {
  return {
    type: UPDATE_RECIPE,
    id: recipe_name,
    payload: { ingredient:  recipe_ingredient}
  }
}
const actionDeleteRecipe = (recipe_name) => {
  return {
    type: DELETE_RECIPE,
    id: recipe_name
  }
}
const actionFireModal = (isTrue) => {
  return {
    type: FIRE_MODAL,
    fireModal:isTrue
  }
}
const mapStateToProps = (state) => {
  return {recipes: state}
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewRecipe: (recipe_name,recipe_ingredient) => {
      dispatch(actionAddRecipe(recipe_name,recipe_ingredient))
    },
    updateRecipe: (recipe_name,recipe_ingredient) => {
      dispatch(actionUpdateRecipe(recipe_name,recipe_ingredient))
    },
    deleteRecipe : (recipe_name) => {
      dispatch(actionDeleteRecipe(recipe_name))
    },
    fireModal: (isTrue) => {
      dispatch(actionFireModal(isTrue))
    }
  };
};
var InitialRecipes = {};
InitialRecipes = {"Pumpkin Pie":"Pumpkin Puree,Sweetened Condensed Milk,Eggs,Pumpkin Pie Spice,Pie Crust",
  "Spaghetti":"Noodles,Tomato Sauce, Meatballs","Onion Pie":"Onion,Pie Crust,Yummy right"};
  console.log(InitialRecipes);
function getRecipesByHash(){
  var byHash = {};
  for(var key in InitialRecipes){
    byHash[key] = {id:key,ingredient:InitialRecipes[key]};
  }
  return byHash;
}
function getRecipes(){
  var temp = [];
  for(var key in InitialRecipes){
    temp.push(key);
  }
  return temp;
}
const initialState = {
  byId:getRecipes(),
  byHash:getRecipesByHash(),
  fireModal:true,
}
const RecipeReducer = (state = initialState,action) => {
  switch (action.type) {
    case ADD_RECIPE :
      var byId = [];
      var same = false;
      for(var i=0;i<state.byId.length;i++){
        if(state.byId[i]==action.id){
          same = true;
          break;
        }
      }
      byId = same ? state.byId : [...state.byId,action.id];
      return {
        byId:byId,byHash:{...state.byHash,[action.id]:action.payload}
      }
    case UPDATE_RECIPE :
      state.byHash[action.id]={...state.byHash[action.id],...action.payload}
      return state;
    case DELETE_RECIPE :
      const itemIds = state.byId.filter(item => {
        return item!==action.id;
      })
      delete state.byHash[action.id]
      return {
        byId:itemIds,
        byHash:state.byHash
      }
    case FIRE_MODAL :
      return {...state,fireModal:action.fireModal};
    default:
      return state;
  }
}
const store = Redux.createStore(RecipeReducer,middleware);

class RecipeBox extends React.Component{
  constructor(props) {
		super(props);
	}
  render(){
    return (
      <div>
        <div className="Main">
          <div className="app">
            <PanelList recipes={this.props.recipes} deleteRecipe={this.props.deleteRecipe}
             fireModal = {this.props.fireModal} updateRecipe={this.props.updateRecipe}/>
          </div>
        </div>
        <div className="addRecipe">
          <Trigger recipes = {this.props.recipes} addNewRecipe={this.props.addNewRecipe}
          />
        </div>
      </div>
    )
  }
}

const Trigger = React.createClass({
  getInitialState() {
    return {
      showModal: false ,
    };
  },
  close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
  addRecipe(){
    var oldRecipes = JSON.parse(localStorage.getItem('recipebox')) || {};
    if(this.inputName.value && this.inputIngredient.value){
      const key = this.inputName.value;
      var newRecipe = {};
      newRecipe[key] = this.inputIngredient.value;
      oldRecipes[this.inputName.value] = newRecipe[key];
      localStorage.setItem('recipebox', JSON.stringify(oldRecipes));
      this.props.addNewRecipe(this.inputName.value,this.inputIngredient.value);
    }
    this.setState({ showModal: false});
  },
  render() {
    var Button = ReactBootstrap.Button;
    var Modal = ReactBootstrap.Modal;
    var OverlayTrigger = ReactBootstrap.OverlayTrigger;
    var FormControl = ReactBootstrap.FormControl;
    var Table = ReactBootstrap.Table;
    var liststyle = {border: '1px solid #bdbebd'};
    return (
      <div >
        <Button  bsStyle="primary" bsSize="large" onClick={this.open}>
          Add Recipe
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Recipe</h4>
            <FormControl componentClass="input" placeholder="Enter Recipe Name"
                inputRef={(ref) => {this.inputName = ref}} defaultValue={""}/>
            <h4>Ingredients</h4>
            <FormControl componentClass="textarea" placeholder="Enter Ingredients, separated by commas"
                inputRef={(ref) => {this.inputIngredient = ref}} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.addRecipe} className="btn btn-success">Add Recipe</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

const TriggerEdit = React.createClass({
  getInitialState() {
    return {
      showModal: true,
    };
  },
  close() {
    this.setState({ showModal: false });
    this.props.fireModal(false);
  },
  open() {
    this.setState({ showModal: true });
  },
  editRecipe(){
    var oldRecipes = JSON.parse(localStorage.getItem('recipebox')) || {};
    if(this.inputName.value && this.inputIngredient.value){
      const key = this.inputName.value;
      var newRecipe = {};
      newRecipe[key] = this.inputIngredient.value;
      oldRecipes[this.inputName.value] = newRecipe[key];
      localStorage.setItem('recipebox', JSON.stringify(oldRecipes));
      this.props.updateRecipe(this.inputName.value,this.inputIngredient.value);
      this.props.fireModal(false);
    }
    this.setState({ showModal: false});
  },
  render() {
    var Button = ReactBootstrap.Button;
    var Modal = ReactBootstrap.Modal;
    var OverlayTrigger = ReactBootstrap.OverlayTrigger;
    var FormControl = ReactBootstrap.FormControl;
    var Table = ReactBootstrap.Table;
    var liststyle = {border: '1px solid #bdbebd'};
    return (
      <div >
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Recipe</h4>
            <FormControl componentClass="input" placeholder="Enter Recipe Name"
                inputRef={(ref) => {this.inputName = ref}} defaultValue={this.props.recipeName}/>
            <h4>Ingredients</h4>
            <FormControl componentClass="textarea" placeholder="Enter Ingredients, separated by commas"
                inputRef={(ref) => {this.inputIngredient = ref}}  defaultValue={this.props.recipeIngredient}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.editRecipe} className="btn btn-success">Edit Recipe</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

const PanelList = React.createClass({
  getInitialState() {
    return {
      recipeId: "",
      recipeIngredient:"",
    };
  },
  deleteRecipe(){
    var oldRecipes = JSON.parse(localStorage.getItem('recipebox')) || {};
    if(this.state.recipeId){
      const key = this.state.recipeId;
      delete oldRecipes[key];
      localStorage.setItem('recipebox', JSON.stringify(oldRecipes));
    }
    this.props.deleteRecipe(this.state.recipeId);
  },
  editRecipe(){
    this.props.fireModal(true);
  },
  handleRecipe(name,ingredient){
    this.props.fireModal(false);
    this.setState({recipeId:name,recipeIngredient:ingredient});
  },
  render(){
    var Panel = ReactBootstrap.Panel;
    var ListGroup = ReactBootstrap.ListGroup;
    var ListGroupItem = ReactBootstrap.ListGroupItem;
    var Button = ReactBootstrap.Button;
    var Accordion = ReactBootstrap.Accordion;
    var Recipes = this.props.recipes.byHash;
    var Keys = this.props.recipes.byId;
    const self = this;
    var List = Keys.map(function(key,idx){
      var ingredient = Recipes[key].ingredient;
      var items = ingredient.split(',');
      var mappedItems = items.map(function(item){
        return <ListGroupItem>{item}</ListGroupItem>
      });
      return   <Panel collapsible  eventKey={idx} header={key} onSelect={()=>self.handleRecipe(key,ingredient)}>
          <h4 className="text-center">Ingredients</h4>
        <div className="ListGroupDiv" >
          <ListGroup  fill>
            {mappedItems}
          </ListGroup>
        </div>
          <Button className="btn-danger" onClick={self.deleteRecipe}>Delete</Button> &nbsp;
          <Button onClick={self.editRecipe}>Edit</Button>
          {self.props.recipes.fireModal && key===self.state.recipeId ? <TriggerEdit updateRecipe={self.props.updateRecipe}
            recipeName={key} recipeIngredient={Recipes[key].ingredient} fireModal={self.props.fireModal}/> : "" }
        </Panel>
    });
    return (
      <div>
        <Accordion > {List} </Accordion>
      </div>
    );
  }
});

const Container = connect(mapStateToProps,mapDispatchToProps)(RecipeBox);
class AppWrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Container/>
			</Provider>
		);
	}
};
ReactDOM.render(<AppWrapper/>,document.getElementById('main'));
