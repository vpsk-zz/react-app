import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.age = props.age;
	}

	onMakeOlder() {
		this.age += 3;
		console.log(this.age)
	}

	render() {
		console.log(this.props);
		return (
			<div>
					Home component
					<p>Name : {this.props.name}</p>
					<p>Age : {this.age}</p>	
					<hr/>
					<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Change no</button>	
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string, 
	age: React.PropTypes.number
}