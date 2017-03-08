import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			fieldName : 'Home'
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

    render() {
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
                        <Home name={"Virendra"} 
                        	  initialAge={24} 
                        	  greet={this.onGreet}
                        	  changedLink = {this.onChangedLinkName.bind(this)}
                        	  initialLinkName = {this.state.fieldName}
                        >
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));