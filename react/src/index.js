import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import {Route, Router, Link, browserHistory} from 'react-router';

// difined route of App
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="login" component={Login}/>
    <Route path="register" component={Register}/>
  </Router>
), document.getElementById('app'));
