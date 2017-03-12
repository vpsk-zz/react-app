import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.age = props.age;
		this.state = {
			age : props.initialAge,
			status: 0,
			homeName: props.initialLinkName
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
			age : this.state.age - 2,
			status : this.state.status + 1
 		});
	}

	onChangedLink() {
		this.props.changedLink(this.state.homeName);
	}

	onHandChange(e) {
		console.log(e)
		this.setState({
			homeName : e.target.value
 		});
	}

	componentWillMount() {
		console.log("componentWillMount");
	}

	componentDidMount() {
		console.log("componentDidMount");
	}

	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps", nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate", nextProps, nextState);
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("componentWillUpdate", nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate", prevProps, prevState);
	}

	componentWillUnmount(prevProps, prevState) {
		console.log("componentWillUnmount");
	}

	render() {
		console.log(this.props);
		return (
			<div>
					Home component
					<p>Name : {this.props.name}</p>
					<p>Age : {this.state.age}</p>
					<p>Phone No : {this.props.phoneNo}</p>
					<p>Status : {this.state.status}</p>
					<hr/>
					<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Change no (+)</button>
					<hr/>
					<button onClick={this.onMakeOlderMinus.bind(this)} className="btn btn-primary">Change no (-)</button>
					<hr/>
					<button onClick={this.props.greet} className="btn btn-primary">Call To Parent Comp</button>
					<hr/>
					<input type="text" value={this.state.homeName} onChange={this.onHandChange.bind(this)}/>
					<hr/>
					<button onClick={this.onChangedLink.bind(this)} className="btn btn-primary">Changed the header</button>		
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string, 
	age: React.PropTypes.number,
	changedLink : React.PropTypes.func,
	initialLinkName: React.PropTypes.string
}