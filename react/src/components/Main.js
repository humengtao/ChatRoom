require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MessageBox from './MessageBox';
import InputBox from './InputBox';
import {Link} from 'react-router';
import action from '../actions/SocketAction';

class AppComponent extends React.Component {
  constructor(){
    super();
    action.socket();
  }
  render() {
    return (
      <div className="index">
        <h1>ChatRoom</h1>
        <MessageBox/>
        <InputBox/>
        <h3><Link to="/login">登录</Link> <Link to="/register">注册</Link></h3>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
