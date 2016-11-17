/**
 * Created by humengtao on 2016/11/17.
 */
require('styles/Register.css');

import React from 'react';
import {Link} from 'react-router';

class Register extends React.Component {
  render() {
    return (
      <div className="register">
        <h1>Register</h1>
        <form method="post" action="">
          Username: <input type="text" name="name"/>
          Password: <input type="password" name="password"/>
          已注册账号,<Link to="/login">去登陆</Link>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default Register;
