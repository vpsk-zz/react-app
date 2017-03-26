import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <h2 className="text-center">ReactJs Components </h2>
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
                        <li><Link to={"/user/10"} activeStyle={{color: "green"}}  activeClassName={"active"}>User</Link></li>
                        <li><Link to={"/search"} activeStyle={{color: "pink"}} activeClassName={"active"}>Search</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};