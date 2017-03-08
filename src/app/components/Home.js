import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.age = props.age;
		this.state = {
			age : props.initialAge,
			status: 0
		};
	}

	onMakeOlder() {
		//this.age += 3;
		//console.log(this.age)
		this.setState({
			age : this.state.age + 3
 		});
	}

	onMakeOlderMinus() {
		this.setState({
			age : this.state.age - 3,
			status : this.state.status + 1
 		});
	}

	render() {
		console.log(this.props);
		return (
			<div>
					Home component
					<p>Name : {this.props.name}</p>
					<p>Age : {this.state.age}</p>	
					<p>Status : {this.state.status}</p>
					<hr/>
					<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Change no (+)</button>
					<hr/>
					<button onClick={this.onMakeOlderMinus.bind(this)} className="btn btn-primary">Change no (-)</button>	
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string, 
	age: React.PropTypes.number
}