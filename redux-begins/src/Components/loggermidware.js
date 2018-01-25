import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const reducer = (state = 0, action) => {
	if (action.type === "INC") {
		console.log('State Change is gonna happen in this reducer now! Current State is ', state);
		return state+action.payload;
	}
}

const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

store.subscribe(() => {
	console.log('Store Changed ', store.getState());
});

store.dispatch({type : "INC", payload : 1});
console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');