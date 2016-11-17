/**
 * Created by humengtao on 2016/11/17.
 */
require('styles/Login.css');

import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form method="post" action="">
          Username: <input type="text" name="name"/>
          Password: <input type="password" name="password"/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;
