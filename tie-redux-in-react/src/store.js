import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers'

const customLogger = (store) => (next) => (action) => {
	
}
const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, middleware);

export default store;

/*const userReducer = (state = {}, action) => {
	switch(action.type) {
		case 'CHANGE_NAME' : {
			state = { ...state, name : action.payload}
			break;
		}
	}
	return state;
}

const blogsReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_BLOG' : {
			state = [ ...state, {title : action.payload[0].title, desc : action.payload[0].desc, cat : action.payload[0].cat, date : action.payload[0].date}]
			break;
		}
	}
	return state;
}

const reducers = combineReducers({
	user : userReducer,
	blogs : blogsReducer
})


store.dispatch((dispatch) => {
	dispatch({type: "CHANGE_NAME", payload : "Abid Shamim PM"});
	dispatch({type: "ADD_BLOG", payload : [ {title : "Wonder kid!",
		desc : "Do you know that Im a wonder kid for my Pappa. I love my Pappa!",
		cat : "Kids",
		date : "26/1/2018"}]});

	dispatch({type: "ADD_BLOG", payload : [ {title : "2. Wonder kid!",
		desc : "2. Do you know that Im a wonder kid for my Pappa. I love my Pappa!",
		cat : "2. Kids",
		date : "25/1/2018"}]});
})*/