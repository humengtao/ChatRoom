'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _LoginAction = require('../actions/LoginAction');

var _LoginAction2 = _interopRequireDefault(_LoginAction);

var _LoginStore = require('../stores/LoginStore');

var _LoginStore2 = _interopRequireDefault(_LoginStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by humengtao on 2016/11/17.
 */
require('styles/Login.css');

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _LoginAction2.default.init();
    return _this;
  }

  _createClass(Login, [{
    key: 'login',
    value: function login() {
      _LoginAction2.default.login(this.username.value, this.password.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.state.login) {
        return _react2.default.createElement(
          'div',
          { className: 'login' },
          _react2.default.createElement(
            'h1',
            null,
            'Login'
          ),
          'Username: ',
          _react2.default.createElement('input', { type: 'text', name: 'name', ref: function ref(input) {
              return _this2.username = input;
            } }),
          'Password: ',
          _react2.default.createElement('input', { type: 'password', name: 'password', ref: function ref(input) {
              return _this2.password = input;
            } }),
          _react2.default.createElement(
            'p',
            null,
            ' 没有账号，',
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/register' },
              '去注册'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            ' 现在不想登陆，',
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/' },
              '返回首页'
            )
          ),
          _react2.default.createElement(
            'button',
            { value: 'submit', onClick: this.login.bind(this) },
            'Login'
          )
        );
      }
      return null;
    }
  }]);

  return Login;
}(_react2.default.Component);

_reactMixin2.default.onClass(Login, _reflux2.default.connect(_LoginStore2.default, 'login'));

exports.default = Login;

//# sourceMappingURL=Login-compiled.js.map