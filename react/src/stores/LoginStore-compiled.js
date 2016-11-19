'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _LoginAction = require('../actions/LoginAction');

var _LoginAction2 = _interopRequireDefault(_LoginAction);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = require('jquery');

var LoginStore = _reflux2.default.createStore({
  login_state: false,

  username: '',

  login_error_msg: '',

  register_error_msg: '',

  listenables: _LoginAction2.default,

  onInit: function onInit() {
    var _this = this;

    $.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      success: function success(data) {
        _this.login_state = true;
        _this.username = data.username;
        _this.trigger({
          login_state: _this.login_state,
          username: _this.username
        });
      },
      error: function error() {
        _this.trigger('');
      }
    });
  },
  onLogin: function onLogin(username, password) {
    var _this2 = this;

    $.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      data: { username: username, password: password },
      success: function success(data) {
        _this2.login_state = true;
        _this2.username = data.username;
        _this2.trigger({
          login_state: _this2.login_state,
          username: _this2.username
        });
        _reactRouter.browserHistory.push('/');
      },
      error: function error() {
        _this2.login_state = false;
        _this2.trigger('');
      }
    });
  },
  onRegister: function onRegister(username, password) {
    var _this3 = this;

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
          _this3.trigger({ errMsg: '输入不合法' });
        } else if (errMessage == 'exist') {
          _this3.trigger({ errMsg: '用户名已存在' });
        }
      }
    });
  },
  onLogout: function onLogout() {
    var _this4 = this;

    $.ajax({
      url: 'http://localhost:3000/logout',
      method: 'GET',
      success: function success() {
        _this4.trigger('');
      },
      failed: function failed() {
        alert('logout failed!');
      }
    });
  },
  onRegistererror: function onRegistererror() {
    this.trigger({ errMsg: '' });
  }
});

exports.default = LoginStore;

//# sourceMappingURL=LoginStore-compiled.js.map