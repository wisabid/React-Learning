export function addBlog(blogobj) {
	return {
		type: "ADD_BLOG",
		payload : blogobj
	}
}