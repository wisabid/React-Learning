export default function reducer(state = [], action) {
	switch(action.type) {
		case 'ADD_BLOG' : {
			let blogs = [];
			action.payload.map((item) => {
				blogs.push({about : item.about, email : item.email})
				return item;
			})
			state = [ ...state];
			state = blogs;
			break;
		}
	}
	return state;
}