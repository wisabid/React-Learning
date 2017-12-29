import React, { Component } from 'react';
import Profile from './Profile'

class Profiles extends Component {
	render() {
		//in class component, this.props is readily available
		return (
			<div>
				<h1>{this.props.title}</h1>
					<Profile relation="Father">Pappa </Profile>
					<Profile relation="Mother">Mamma </Profile>
					<Profile relation="Brother">Aakka </Profile>
					<Profile relation="Brother">Sajikka </Profile>
					<Profile relation="Sister">Bifa </Profile>
					<Profile ext="Brother in Law">Febin </Profile>
					<Profile></Profile>
				
			</div>
		);
	}
}

export default Profiles;