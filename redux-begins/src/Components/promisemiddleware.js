import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import axios from 'axios';

const reducer = (state, action) => {
	switch(action.type) {
		case 'FETCH_MEN_PENDING' : {
			state = {...state, fetching : true};
			break;
		}
		case 'FETCH_MEN_FULFILLED' : {
			state = { ...state, fetching : false, fetched : true, users : action.payload}
			break;
		}
		case 'FETCH_MEN_REJECTED' : {
			state = { ...state, fetching : false, fetched : false, err : action.payload}
			break;
		}

	}
	return state;
}

const middleware = applyMiddleware(promise(), logger)
const store = createStore(reducer, middleware);

//the follo can b used only if promise middleware is passed into applyMiddleware function above
//FOO type will automatically generate FOO_PENDING & FOO_FULFILLED
store.dispatch({
	type : "FOO",
	payload : axios.get('http://www.json-generator.com/api/json/get/cdYsJAzBVe?indent=2')
});

//look at reducer..ther v r overriding promise middlewares _PENDING _FULFILLED & _REJECTED types
store.dispatch({
	type : "FETCH_MEN",
	payload : axios.get('http://www.json-generatorr.com/api/json/get/cdYsJAzBVe?indent=2')
});


