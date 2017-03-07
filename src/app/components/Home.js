import React from "react";

export class Home extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
					Home component
					<p>Name : {this.props.name}</p>
					<p>Age : {this.props.age}</p>
					<div>
					<p>User Name : {this.props.user.name}</p>
						<h4>Hobbbies :</h4>
						<ul>
							{this.props.user.hobbies.map((hobby, key) => <li key={key}> {hobby}</li>)}
						</ul>
					</div>
					<hr/>
					{this.props.children}		
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string, 
	age: React.PropTypes.number, 
	user: React.PropTypes.object, 
}