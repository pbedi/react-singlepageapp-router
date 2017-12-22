import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="App-header col-md-12">
                        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                        <h2>Welcome to React</h2>
                        <ul>
                            <li><Link to="/One">One</Link></li>
                            <li><Link to="/Two">Two</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;