import React from 'react';

const child  = (props) => {
	return (
		<div className="child">
			<button onClick={props.changeTitle}>I'm child! Hit me! But..{props.title}</button>
			<br/><br/>
					<label>Relationship is {props.relation} & my {props.relation} is a {props.typ} {props.relation}</label>
					<br/>{props.par}
		</div>
	);
} 

export default child;