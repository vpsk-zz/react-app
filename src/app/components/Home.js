import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.age = props.age;
		this.state = {
			age : props.initialAge,
			status: 0,
			homeName: "data"
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

	onChangedLink() {
		this.props.changedLink(this.state.homeName);
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
					<hr/>
					<button onClick={this.props.greet} className="btn btn-primary">Call To Parent Comp</button>
					<hr/>
					<input type="text"/>
					<hr/>
					<button onClick={this.onChangedLink.bind(this)} className="btn btn-primary">Changed the header</button>		
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string, 
	age: React.PropTypes.number,
	changedLink : React.PropTypes.func
}