import React from 'react';
import Child from './child';

const parent = ( props ) => {
	return (
			<div className="parent">
				I'm Parent!
				<Child {...props} par="This msg is from your Parent Stateless ES6 Component"/>
			</div>
	)
}

export default parent;