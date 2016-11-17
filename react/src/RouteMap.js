/**
 * Created by humengtao on 2016/11/17.
 */
import {Route, Router, browserHistory} from 'react-router';
import App from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';

class RouterMap extends React.Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={App}/>
          <Route path="login" component={Login}/>
          <Route path="register" component={Register}/>
        </Router>
      </div>
    )
  }
}

export default RouterMap;
