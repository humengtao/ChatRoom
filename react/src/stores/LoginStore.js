import reflux from 'reflux';
import actions from '../actions/LoginAction';
import {browserHistory} from 'react-router';
import socket_action from '../actions/SocketAction';

let $ = require('jquery');

const LoginStore = reflux.createStore({
  login_state: false,

  username: '',

  login_error_msg: '',

  register_error_msg: '',

  listenables: actions,

  onInit(){
    $.ajax({
      url: 'http://localhost:3000/init',
      method: 'GET',
      success: (data)=> {
        actions.triggerall(data);
        if (data.isNew==true){
          socket_action.new(data.username);
        }
        socket_action.all(data.username);
      },
      error: ()=> {
        alert('获取信息失败，请重试!');
      }
    });
  },

  onAlluser(){
    $.ajax({
      url: 'http://localhost:3000/all-user',
      method: 'GET',
      success: (data)=> {
        actions.triggerall(data);
      },
      error: ()=> {
        alert('获取信息失败，请重试!');
      }
    });
  },

  onLogin (username, password){
    $.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      data: {username: username, password: password},
      success: (data)=> {
        browserHistory.push('/')
      },
      error: ()=> {
        alert('登录失败，请重试!');
      }
    });
  },

  onRegister(username, password){
    $.ajax({
      url: 'http://localhost:3000/register',
      method: 'POST',
      data: {
        username: username,
        password: password
      },
      success: ()=> {
        browserHistory.push('/')
      },
      error: (data)=> {
        var errMessage = data.responseText;
        if (errMessage == 'wrongful') {
          this.trigger({errMsg: '输入不合法'})
        } else if (errMessage == 'exist') {
          this.trigger({errMsg: '用户名已存在'})
        }
      }
    });
  },

  onLogout (){
    $.ajax({
      url: 'http://localhost:3000/logout',
      method: 'GET',
      success: (data)=> {
        actions.triggerall(data);
        socket_action.all(data.username);
      },
      failed: ()=> {
        alert('logout failed!');
      }
    });
  },

  onRegistererror (){
     this.trigger({errMsg:''});
  },

  onTriggerall(data){
    this.login_state = data.login;
    this.username = data.username;
    this.trigger({
      login_state:this.login_state,
      username:this.username
    });
  }

});

export default LoginStore;
