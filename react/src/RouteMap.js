/**
 * Created by humengtao on 2016/11/17.
 */
import {Route, Router, browserHistory} from 'react-router';

import App from './components/Main';
import Login from './components/Login';
import Register from './components/Register';

import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';


import action from './actions/SocketAction';
import loginStore from './stores/LoginStore';

class RouterMap extends React.Component {
  constructor() {
    super();
    action.socket();
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={App}/>
          <Route path="login" component={loginStore.login_state ? App : Login}/>
          <Route path="register" component={loginStore.login_state ? App : Register}/>
        </Router>
      </div>
    )
  }
}

ReactMixin.onClass(RouterMap, Reflux.connect(loginStore, 'login'));

export default RouterMap;
