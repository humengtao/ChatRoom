require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MessageBox from './MessageBox';
import InputBox from './InputBox';
import UserList from './UserList';

import {Link} from 'react-router';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import login_action from '../actions/LoginAction';
import login_store from '../stores/LoginStore';

class AppComponent extends React.Component {
  constructor() {
    super();
    login_action.init();
  }

  logout() {
    login_action.logout();
  }

  render() {
    if (this.state.login) {
      if (this.state.login.login_state == true) {
        return (
          <div className="index">
            <h1 className="welcome">Welcome to ChatRoom : <span
              className="username">{this.state.login.username}</span><span className="logout"
                                                                           onClick={this.logout.bind(this)}>退出</span>
            </h1>
            <h1>ChatRoom</h1>
            <MessageBox/>
            <InputBox/>
            <UserList/>
          </div>
        );
      }
      return (
        <div className="index">
          <h1 className="welcome">Welcome to ChatRoom : <span
            className="username">{this.state.login.username}</span></h1>
          <h1>ChatRoom</h1>
          <MessageBox/>
          <InputBox/>
          <h3><Link to="/login">登录</Link> <Link to="/register">注册</Link></h3>
          <UserList/>
        </div>
      )
    }
    else return null
  }
}

AppComponent.defaultProps = {};

ReactMixin.onClass(AppComponent, Reflux.connect(login_store, 'login'));

export default AppComponent;
