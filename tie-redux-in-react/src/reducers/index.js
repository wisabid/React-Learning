import {combineReducers } from 'redux';

import user from './userReducer'
import blogs from './blogsReducer'

export default combineReducers({
	user,
	blogs,
})