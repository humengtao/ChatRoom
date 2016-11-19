/**
 * Created by humengtao on 2016/11/17.
 */
require('styles/register.css');
import {Link, browserHistory} from 'react-router';
import React from 'react';
import login_action from '../actions/LoginAction';

let $ = require('jquery');

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMsg: ''
    }
  }

  register() {
    $.ajax({
      url: 'http://localhost:3000/register',
      method: 'POST',
      data: {
        username: this.userInput.value,
        password: this.passInput.value
      },
      success: ()=> {
        browserHistory.push('/')
      },
      error: (data)=> {
        var errMessage = data.responseText;
        console.log(errMessage);
        if (errMessage == 'wrongful') {
          this.setState({errMsg: '输入不合法'})
        } else if (errMessage == 'exist') {
          this.setState({errMsg: '用户名已存在'})
        }
      }
    });
  }

  render() {
    return (
      <div className="register">
        <h1>Register</h1>
        <h2>{!!this.state.errMsg ? this.state.errMsg : ''}</h2>
        Username: <input type="text" name="name" id="name" ref={(input) => this.userInput = input}/>
        Password: <input type="password" name="password" id="password" ref={(input) => this.passInput = input}/>
        <p> 已注册账号，<Link to="/login">登录</Link></p>
        <button value="submit" onClick={this.register.bind(this)}>register</button>
        <Link to="/" ref={(Link)=> this.link = Link}/>
      </div>
    );
  }
}

export default Register;
