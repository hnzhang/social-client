import {TEST_DISPATCH} from '../actions/types';

const initState = {
	isAuthenticated: false,
	user: {},
}

function reducer (state = initState, action){
	switch(action.type){
		case TEST_DISPATCH:
			return { ...state, user: action.payload, }
		default:
			return state;
	}
}

export default reducer;