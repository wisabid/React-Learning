export function fetchUser() {
	return {
		type : "FETCH_USER_FULFILLED",
		payload : {
			name : "Alfie",
			age : 0.5,
			email: 'alfie@alfie.com'
		}
	}
}

export function changeAge(age) {
	return {
		type : "CHANGE_AGE",
		payload : age
	}
}