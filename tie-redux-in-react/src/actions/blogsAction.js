import axios from 'axios';

export function fetchAllBlogs() {
	return function(dispatch) {
		axios.get('http://www.json-generator.com/api/json/get/cdYsJAzBVe?indent=2')
			.then((res) => {
				console.table(res.data);
				dispatch({type : "ADD_BLOG", payload: res.data})
			})
	}
}

export function addBlog(blogobj) {
	return {
		type: "ADD_BLOG",
		payload : blogobj
	}
}