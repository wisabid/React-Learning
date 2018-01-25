import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
	fetching : false,
	fetched : false,
	users : [],
	error : null
}

const reducer = (state = initialState, action) => {
	console.log('Im reducer function!');
	switch(action.type) {
		case 'FETCH_USERS_START' : {
			state = {...state, fetching : true};
			break;
		}
		case 'RECEIVE_USERS' : {
			state = { ...state, fetching : false, fetched : true, users : action.payload}
			break;
		}
		case 'FETCH_USERS_ERROR' : {
			state = { ...state, fetching : false, fetched : false, err : action.payload}
			break;
		}

	}
	return state;
}

const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducer, middleware);

/*store.subscribe(() => {
	console.log('Store changed to ', store.getState());
});*/


//redux-thunk is required to use the following dispatch syntax..thunk middleware has to be passed in applyMiddleware
store.dispatch((dispatch) => {
	dispatch({type : "FETCH_USERS_START"});
	axios.get('http://www.json-generator.com/api/json/get/cdYsJAzBVe?indent=2')
		.then((response) => {
			dispatch({type : 'RECEIVE_USERS', payload : response.data})
		})
		.catch((err) => {
			dispatch({type : 'FETCH_USERS_ERROR', payload : err});
		})
})
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');