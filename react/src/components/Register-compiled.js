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
require('styles/register.css');

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register() {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this));

    _LoginAction2.default.registererror();
    return _this;
  }

  _createClass(Register, [{
    key: 'register',
    value: function register() {
      _LoginAction2.default.register(this.userInput.value, this.passInput.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.register) {
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
            !!this.state.register.errMsg ? this.state.register.errMsg : ''
          ),
          'Username: ',
          _react2.default.createElement('input', { type: 'text', name: 'name', id: 'name', ref: function ref(input) {
              return _this2.userInput = input;
            } }),
          'Password: ',
          _react2.default.createElement('input', { type: 'password', name: 'password', id: 'password', ref: function ref(input) {
              return _this2.passInput = input;
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
              return _this2.link = Link;
            } })
        );
      }
      return _react2.default.createElement('div', null);
    }
  }]);

  return Register;
}(_react2.default.Component);

_reactMixin2.default.onClass(Register, _reflux2.default.connect(_LoginStore2.default, 'register'));

exports.default = Register;

//# sourceMappingURL=Register-compiled.js.map