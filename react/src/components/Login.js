/**
 * Created by humengtao on 2016/11/17.
 */
require('styles/Login.css');
import {Link} from 'react-router';

import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form method="post" action="">
          Username: <input type="text" name="name"/>
          Password: <input type="password" name="password"/>
          <p> 没有账号，<Link to="/register">去注册</Link></p>
          <p> 现在不想登陆，<Link to="/">返回首页</Link></p>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;
