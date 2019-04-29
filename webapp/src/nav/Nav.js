import React, { Component } from 'react';
import './nav.css';
import {NavLink} from "react-router-dom";
import App from '../App';
class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand" >Snowflake Helper</div>
                {App.authService.isAuthenticated === "yes" ?
                    <div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><NavLink className="nav-link" to='/queries'>Queries</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to='/usage'>Usage</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to='/account'>Account</NavLink></li>
                                <li className="nav-item"><NavLink onClick={() => App.authService.logout(null)} className="nav-link" to='/login'>Logout</NavLink></li>
                            </ul>
                        </div>
                    </div> : null}
            </nav>
        );
    }
}
export default NavBar;

