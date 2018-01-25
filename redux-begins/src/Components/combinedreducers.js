import { combineReducers, createStore } from 'redux';

//shud ideally go in a separate file
const userReducer = (state = {}, action) => {
	switch(action.type) {
		case 'CHANGE_NAME' : {
			state = {...state, name : action.payload};
			break;
		}
		case 'CHANGE_AGE' : {
			state = {...state, age : action.payload};
			break;
		}
	}
	return state;
}
//shud ideally go in a separate file ends here

//this 1 in another file
const tweetsReducer = (state = [], action) => {
	if (action.type === "CHANGE_TWEETS") {
		state = [...state, action.payload];
	}
	return state;
}
//this 1 in another file ends here

//bootstrapping rediucers will go in another file
const reducers = combineReducers({
	user : userReducer,
	tweets : tweetsReducer
})
const store = createStore(reducers);
//bootstrapping rediucers will go in another file ends here

store.subscribe(() => {
	console.log('Store changed to ', store.getState());
});

store.dispatch({type : "CHANGE_NAME", payload : "Alf Alvin"});
store.dispatch({type : "CHANGE_TWEETS", payload : "Tweeting : Alf Alvin is a wonderful kid!"});
console.log('_______________________________________________________');