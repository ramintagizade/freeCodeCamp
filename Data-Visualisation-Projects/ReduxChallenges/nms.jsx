const ADD_TO_DO = 'ADD_TO_DO';

const immutableReducer = (state = ['Do not mutate state!'], action) => {
	switch(action.type) {
		case ADD_TO_DO:
			return state.concat(action.todo);
		default:
			return state;
	}
};

const addToDo = (todo) => {
	return {
		type: ADD_TO_DO,
		todo
	}
}

const store = Redux.createStore(immutableReducer);
