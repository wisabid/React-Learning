import { applyMiddleware, createStore} from 'redux';

const reducer = (state, action) => {
	if (action.type == "INC") {
		console.log('Im reducer!');
	}
	else if(action.type == 'Err') {
		//throw new Error('OOOOOOOOOOOOOOps!!'); //throwing to catch in errorhandler middleware
	}
	return state+1;
}

//middleware function
const logger = (store) => (next) => (action) => { //byheart this format for middleware function
	console.log('Gonne Fire Action!', action);
	next(action); //this is required to continue further..without this reducer will not be called
}

const errorhandler = (store) => (next) => (action) => {
	try {
		next(action);
	}
	catch(e) {
		console.log('Ah! Something went wrong!', e.name);
	}
}

const middleware = applyMiddleware(logger);

const store = createStore(reducer, 0, middleware); //pass in middleware as 3rd argument

store.subscribe(() => {
	console.log('Store changed to :', store.getState());
})

store.dispatch({type : "INC"});
store.dispatch({type : "Err"}); //for throwing up error
console.log('*********************************************************************');