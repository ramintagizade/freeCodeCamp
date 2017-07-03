const ADD = 'ADD';

const reducer = (state = 0, action) => {
	switch(action.type) {
		case ADD:
			return state + 1;
		default:
			return state;
	}
};

const store = Redux.createStore(reducer);

store.subscribe( () =>
	console.log('Received an action, state updated: ' + store.getState())
);

store.dispatch({type: ADD});
store.dispatch({type: ADD});
store.dispatch({type: ADD});
