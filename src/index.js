import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { Router, Route, hashHistory } from 'react-router'
import One from './components/One';
import NotFound from './components/NotFound';
import Two from './components/Two';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/One" component={One}></Route>
        <Route path="/Two" component={Two}></Route>
        <Route path='*' component={NotFound} />
    </Router>

    , document.getElementById('root')
    );


registerServiceWorker();
