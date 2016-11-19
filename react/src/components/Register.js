/**
 * Created by humengtao on 2016/11/17.
 */
require('styles/register.css');
import {Link} from 'react-router';
import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import login_action from '../actions/LoginAction';
import login_store from '../stores/LoginStore';

class Register extends React.Component {
  constructor() {
    super();
    login_action.registererror();
  }

  register() {
    login_action.register(this.userInput.value, this.passInput.value);
  }

  render() {
    if (this.state.register) {
      return (
        <div className="register">
          <h1>Register</h1>
          <h2>{!!this.state.register.errMsg ? this.state.register.errMsg : ''}</h2>
          Username: <input type="text" name="name" id="name" ref={(input) => this.userInput = input}/>
          Password: <input type="password" name="password" id="password" ref={(input) => this.passInput = input}/>
          <p> 已注册账号，<Link to="/login">登录</Link></p>
          <button value="submit" onClick={this.register.bind(this)}>register</button>
          <Link to="/" ref={(Link)=> this.link = Link}/>
        </div>
      )
    }
    return (<div></div>)
  }
}

ReactMixin.onClass(Register, Reflux.connect(login_store, 'register'));

export default Register;
