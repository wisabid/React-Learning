import { createStore } from 'redux';

const reducer = (state, action) => {
	switch(action.type) {
		case 'CHANGE_NAME' : {
			console.log('CURR STATE : ', state);
			//state.name = action.payload; //NB : THIS SHUD NEVA EVA BE DONE
			state = {...state, name : action.payload}; //destructuring objects to clone an existing object and overriding with name property..if it is {...state, name : action.payload, ...state}, the state will again override name..so avoid that 
			break;
		}
		case 'CHANGE_AGE' : {
			console.log('CURR STATE : ', state);
			state = {...state, age : action.payload}
			break;
		}
		case 'CHANGE_NAMEAGE' : {
			state = {...state, name : action.payload.name, age : action.payload.age}
			break;
		}
	}
	return state;
	
}
const store = createStore(reducer, {
		name : "Alfie",
		age : 1
	}
);

store.subscribe(() => {
	console.log('Store changed to ', store.getState());
})

store.dispatch({type : "CHANGE_NAME", payload : "Abid"});
store.dispatch({type : "CHANGE_AGE", payload : 0.5});

store.dispatch({type : "CHANGE_NAMEAGE", payload : {name : "Will Smith", age : 55}});
console.log('.............................................................');