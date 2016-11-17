'use strict';

require('core-js/fn/object/assign');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Login = require('./components/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('./components/Register');

var _Register2 = _interopRequireDefault(_Register);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// difined route of App
_reactDom2.default.render(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Main2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _Login2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'register', component: _Register2.default })
), document.getElementById('app'));

//# sourceMappingURL=index-compiled.js.map