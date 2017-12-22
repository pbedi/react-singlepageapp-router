import React, { Component } from 'react';
import Header from './Header';
class One extends Component {
    render() {
        return (
            <div className="App">
            <Header />
                <div className="row">
                    <div className="col-md-12">
                    <h1>I am One</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default One;