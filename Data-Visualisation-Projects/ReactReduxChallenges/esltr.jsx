const ADD  = 'ADD';
const addMessage = (message) => {
  return {
		type: ADD,
  	message : message
  }
}
function messageReducer(state=[],action){
	switch(action.type){
    case ADD :
      return [...state.concat(action.message)];
    default :
      return state;
  }
}
const store = Redux.createStore(messageReducer);
console.log('dds');
