import React from 'react';

const Profile = (props) => {
	let ext = props.ext?props.ext: "Extended Family Member";
	if (props.children) {
		// In ES6 function component, props has to be passed as an argument
		return (
			<div className="crl"> {props.children} ({props.relation} - {ext}) </div>
		)
	}
	else {
		return <div className="crl">Invalid</div>;
	}
}
export default Profile;