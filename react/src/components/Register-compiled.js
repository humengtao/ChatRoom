'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginAction = require('../actions/LoginAction');

var _LoginAction2 = _interopRequireDefault(_LoginAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by humengtao on 2016/11/17.
 */
require('styles/register.css');


var $ = require('jquery');

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register() {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this));

    _this.state = {
      errorMsg: ''
    };
    return _this;
  }

  _createClass(Register, [{
    key: 'register',
    value: function register() {
      var _this2 = this;

      $.ajax({
        url: 'http://localhost:3000/register',
        method: 'POST',
        data: {
          username: this.userInput.value,
          password: this.passInput.value
        },
        success: function success() {
          _reactRouter.browserHistory.push('/');
        },
        error: function error(data) {
          var errMessage = data.responseText;
          console.log(errMessage);
          if (errMessage == 'wrongful') {
            _this2.setState({ errMsg: '输入不合法' });
          } else if (errMessage == 'exist') {
            _this2.setState({ errMsg: '用户名已存在' });
          }
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'register' },
        _react2.default.createElement(
          'h1',
          null,
          'Register'
        ),
        _react2.default.createElement(
          'h2',
          null,
          !!this.state.errMsg ? this.state.errMsg : ''
        ),
        'Username: ',
        _react2.default.createElement('input', { type: 'text', name: 'name', id: 'name', ref: function ref(input) {
            return _this3.userInput = input;
          } }),
        'Password: ',
        _react2.default.createElement('input', { type: 'password', name: 'password', id: 'password', ref: function ref(input) {
            return _this3.passInput = input;
          } }),
        _react2.default.createElement(
          'p',
          null,
          ' 已注册账号，',
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/login' },
            '登录'
          )
        ),
        _react2.default.createElement(
          'button',
          { value: 'submit', onClick: this.register.bind(this) },
          'register'
        ),
        _react2.default.createElement(_reactRouter.Link, { to: '/', ref: function ref(Link) {
            return _this3.link = Link;
          } })
      );
    }
  }]);

  return Register;
}(_react2.default.Component);

exports.default = Register;

//# sourceMappingURL=Register-compiled.js.map