'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MessageBox = require('./MessageBox');

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _InputBox = require('./InputBox');

var _InputBox2 = _interopRequireDefault(_InputBox);

var _UserList = require('./UserList');

var _UserList2 = _interopRequireDefault(_UserList);

var _reactRouter = require('react-router');

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

require('normalize.css/normalize.css');
require('styles/App.css');

var AppComponent = function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    var _this = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this));

    _LoginAction2.default.init();
    return _this;
  }

  _createClass(AppComponent, [{
    key: 'logout',
    value: function logout() {
      _LoginAction2.default.logout();
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.login) {
        if (this.state.login.login_state == true) {
          return _react2.default.createElement(
            'div',
            { className: 'index' },
            _react2.default.createElement(
              'h1',
              { className: 'welcome' },
              'Welcome to ChatRoom : ',
              _react2.default.createElement(
                'span',
                {
                  className: 'username' },
                this.state.login.username
              ),
              _react2.default.createElement(
                'span',
                { className: 'logout',
                  onClick: this.logout.bind(this) },
                '退出'
              )
            ),
            _react2.default.createElement(
              'h1',
              null,
              'ChatRoom'
            ),
            _react2.default.createElement(_MessageBox2.default, null),
            _react2.default.createElement(_InputBox2.default, null),
            _react2.default.createElement(_UserList2.default, null)
          );
        }
        return _react2.default.createElement(
          'div',
          { className: 'index' },
          _react2.default.createElement(
            'h1',
            { className: 'welcome' },
            'Welcome to ChatRoom : ',
            _react2.default.createElement(
              'span',
              {
                className: 'username' },
              this.state.login.username
            )
          ),
          _react2.default.createElement(
            'h1',
            null,
            'ChatRoom'
          ),
          _react2.default.createElement(_MessageBox2.default, null),
          _react2.default.createElement(_InputBox2.default, null),
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/login' },
              '登录'
            ),
            ' ',
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/register' },
              '注册'
            )
          ),
          _react2.default.createElement(_UserList2.default, null)
        );
      } else return null;
    }
  }]);

  return AppComponent;
}(_react2.default.Component);

AppComponent.defaultProps = {};

_reactMixin2.default.onClass(AppComponent, _reflux2.default.connect(_LoginStore2.default, 'login'));

exports.default = AppComponent;

//# sourceMappingURL=Main-compiled.js.map