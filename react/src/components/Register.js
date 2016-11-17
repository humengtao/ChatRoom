/**
 * Created by humengtao on 2016/11/17.
 */
require('styles/Register.css');

import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <div className="register">
        <h1>Register</h1>
        <form method="post" action="">
          Username: <input type="text" name="name"/>
          Password: <input type="password" name="password"/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default Register;
