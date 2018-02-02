import React from 'react'


const Name = (props) => {
	return (props.names.map(user => {
		return <li className="animit">{user.name} | {user.age} | {user.email}</li>
	})
	)
}

export default Name