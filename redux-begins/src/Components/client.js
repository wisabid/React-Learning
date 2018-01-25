import { createStore } from 'redux';

const reducer = (state, action) => {
	if (action.type === "INC") {
		console.log('State Change is gonna happen in this reducer now! Current State is ', state);
		return state+action.payload;
	}
	else if(action.type === "DEC") {
		return state-action.payload;
	}
	return state;
}
//returning state is a must in reducer function

const store = createStore(reducer, 0); //0 is the initial value..here primitive to simplofy..usually objects

store.subscribe(() => {
	console.log('Store Changed To', store.getState());
});

console.log('Dispatching an action!');
store.dispatch({type : "INC", payload : 1}); //type is mandatory while dispatching n its a keyword

console.log('Dispatching another action!');
store.dispatch({type : "INC", payload : 2}); //payload will be usually an object
console.log('Dispatching another action!');
store.dispatch({type : "INC", payload : 10}); 
console.log('Dispatching another action!');
store.dispatch({type : "INC", payload : 100}); 
console.log('Dispatching another action!');
store.dispatch({type : "INC", payload : 50}); 
console.log('Dispatching another action!');
store.dispatch({type : "INC", payload : 1000}); 

console.log('Dispatching another action passing in a different Type!');
store.dispatch({type : "DEC", payload : 300}); 

console.log('--------------------------------------------------');