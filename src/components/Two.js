import React, { Component } from 'react';
import Header from './Header';
class Two extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="row">
                    <div className="col-md-12">
                    <h1>I am Two</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h1>Line Two</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Two;