import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			fieldName : 'Home',
			homeMounted : true	
		}
	}

	onGreet(){
		alert("Hello ReactJs");
	}

	onChangedLinkName(value) {
		this.setState({
			fieldName : value
		})
	}

	onChangeMounted() {
		this.setState({
			homeMounted : !this.state.homeMounted
		})
	}

    render() {
    	let homeComp = "";
    	if(this.state.homeMounted) {
    		homeComp = <Home name={"Virendra"} 
                        	  initialAge={24} 
                        	  phoneNo = {888123456}
                        	  greet={this.onGreet}
                        	  changedLink = {this.onChangedLinkName.bind(this)}
                        	  initialLinkName = {this.state.fieldName}
                        ></Home>;
    	}
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <p>{this.state.fieldName}</p>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeComp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeMounted.bind(this)}>Unmount home comp</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));