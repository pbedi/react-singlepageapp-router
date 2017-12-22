import React, { Component } from 'react';
import Header from './Header';

class NotFound extends Component {
    render() {
        return (
            <div className="App">
            <Header />
                <div className="row">
                    <div className="col-md-12">
                    <h1>Page not found</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;