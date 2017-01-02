import  React from  'react';
import  ReactDOM from  'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {friendMsg} from 'react'
const routers = (
    <Router history={browserHistory}>
        <Route path="/friendMsg" component={friendMsg} >
    </Router>
);