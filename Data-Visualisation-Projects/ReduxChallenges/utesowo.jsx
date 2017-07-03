const defaultState = {
	user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'Free Code Camp'
};

const immutableReducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'ONLINE':
			return { ...state, status: 'online' };
		default:
			return state;
	}
};

const wakeUp = () => {
	return {
		type: 'ONLINE',
	}
};

const store = Redux.createStore(immutableReducer);
