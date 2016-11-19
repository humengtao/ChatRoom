import reflux from 'reflux';
import actions from '../actions/LoginAction';
import {browserHistory} from 'react-router';

let $ = require('jquery');

const LoginStore = reflux.createStore({
  login_state: false,

  username: '',

  login_error_msg: '',

  register_error_msg: '',

  listenables: actions,

  onInit(){
    $.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      success: (data)=> {
        this.login_state = true;
        this.username = data.username;
        this.trigger({
          login_state: this.login_state,
          username: this.username
        });
      },
      error: ()=> {
        this.trigger('');
      }
    });
  },

  onLogin (username, password){
    $.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      data: {username: username, password: password},
      success: (data)=> {
        this.login_state = true;
        this.username = data.username;
        this.trigger({
          login_state: this.login_state,
          username: this.username
        });
        browserHistory.push('/')
      },
      error: ()=> {
        this.login_state = false;
        this.trigger('');
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
      success: ()=> {
        this.trigger('');
      },
      failed: ()=> {
        alert('logout failed!');
      }
    });
  },

  onRegistererror (){
     this.trigger({errMsg:''});
  }

});

export default LoginStore;
