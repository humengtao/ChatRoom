/**
 * Created by humengtao on 2016/11/17.
 */
require('styles/Login.css');
import {Link} from 'react-router';
import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import login_action from '../actions/LoginAction';
import login_store from '../stores/LoginStore';

class Login extends React.Component {
  constructor() {
    super();
    login_action.init();
  }

  login() {
    login_action.login(this.username.value, this.password.value)
  }

  render() {
    if (!this.state.login) {
      return (
        <div className="login">
          <h1>Login</h1>
          Username: <input type="text" name="name" ref={(input)=> this.username = input}/>
          Password: <input type="password" name="password" ref={(input)=>this.password = input}/>
          <p> 没有账号，<Link to="/register">去注册</Link></p>
          <p> 现在不想登陆，<Link to="/">返回首页</Link></p>
          <button value="submit" onClick={this.login.bind(this)}>Login</button>
        </div>
      )
    }
    return null;
  }
}

ReactMixin.onClass(Login, Reflux.connect(login_store, 'login'));

export default Login;
