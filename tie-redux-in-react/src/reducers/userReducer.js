export default function reducer(state = {
	name : null,
	age : null,
	email : null
}, action) {
	switch(action.type) {
		case 'FETCH_USER_FULFILLED' : {
			state = { ...state, name : action.payload.name, age : action.payload.age, email : action.payload.email}
			break;
		}
		case 'CHANGE_AGE' : {
			state = { ...state};
			state.age+=action.payload
			break;
		}
	}
	return state;
	
}