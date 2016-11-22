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
        actions.triggerall();
      },
      error: ()=> {
        this.username='(游客)CR-'+(~~(Math.random(1)*10e9));
        actions.triggerall();
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
        actions.triggerall();
        browserHistory.push('/')
      },
      error: ()=> {
        this.login_state = false;
        actions.triggerall();
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
        this.login_state=false;
        this.username='(游客)CR-'+(~~(Math.random(1)*10e9));
        actions.triggerall();
      },
      failed: ()=> {
        alert('logout failed!');
      }
    });
  },

  onRegistererror (){
     this.trigger({errMsg:''});
  },

  onTriggerall(){
    this.trigger({
      login_state:this.login_state,
      username:this.username
    });
  }

});

export default LoginStore;
