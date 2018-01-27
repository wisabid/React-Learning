export default function reducer(state = [], action) {
	switch(action.type) {
		case 'ADD_BLOG' : {
			state = [ ...state, {title : action.payload[0].title, desc : action.payload[0].desc, cat : action.payload[0].cat, date : action.payload[0].date}]
			break;
		}
	}
	return state;
}