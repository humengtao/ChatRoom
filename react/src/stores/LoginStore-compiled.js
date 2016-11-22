'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _LoginAction = require('../actions/LoginAction');

var _LoginAction2 = _interopRequireDefault(_LoginAction);

var _reactRouter = require('react-router');

var _SocketAction = require('../actions/SocketAction');

var _SocketAction2 = _interopRequireDefault(_SocketAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = require('jquery');

var LoginStore = _reflux2.default.createStore({
  login_state: false,

  username: '',

  login_error_msg: '',

  register_error_msg: '',

  listenables: _LoginAction2.default,

  onInit: function onInit() {
    $.ajax({
      url: 'http://localhost:3000/init',
      method: 'GET',
      success: function success(data) {
        _LoginAction2.default.triggerall(data);
        if (data.isNew == true) {
          _SocketAction2.default.new(data.username);
        }
        _SocketAction2.default.all(data.username);
      },
      error: function error() {
        alert('获取信息失败，请重试!');
      }
    });
  },
  onAlluser: function onAlluser() {
    $.ajax({
      url: 'http://localhost:3000/all-user',
      method: 'GET',
      success: function success(data) {
        _LoginAction2.default.triggerall(data);
      },
      error: function error() {
        alert('获取信息失败，请重试!');
      }
    });
  },
  onLogin: function onLogin(username, password) {
    $.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      data: { username: username, password: password },
      success: function success(data) {
        _reactRouter.browserHistory.push('/');
      },
      error: function error() {
        alert('登录失败，请重试!');
      }
    });
  },
  onRegister: function onRegister(username, password) {
    var _this = this;

    $.ajax({
      url: 'http://localhost:3000/register',
      method: 'POST',
      data: {
        username: username,
        password: password
      },
      success: function success() {
        _reactRouter.browserHistory.push('/');
      },
      error: function error(data) {
        var errMessage = data.responseText;
        if (errMessage == 'wrongful') {
          _this.trigger({ errMsg: '输入不合法' });
        } else if (errMessage == 'exist') {
          _this.trigger({ errMsg: '用户名已存在' });
        }
      }
    });
  },
  onLogout: function onLogout() {
    $.ajax({
      url: 'http://localhost:3000/logout',
      method: 'GET',
      success: function success(data) {
        _LoginAction2.default.triggerall(data);
        _SocketAction2.default.all(data.username);
      },
      failed: function failed() {
        alert('logout failed!');
      }
    });
  },
  onRegistererror: function onRegistererror() {
    this.trigger({ errMsg: '' });
  },
  onTriggerall: function onTriggerall(data) {
    this.login_state = data.login;
    this.username = data.username;
    this.trigger({
      login_state: this.login_state,
      username: this.username
    });
  }
});

exports.default = LoginStore;

//# sourceMappingURL=LoginStore-compiled.js.map