'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = require('react-router');

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Login = require('./components/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('./components/Register');

var _Register2 = _interopRequireDefault(_Register);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by humengtao on 2016/11/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RouterMap = function (_React$Component) {
  _inherits(RouterMap, _React$Component);

  function RouterMap() {
    _classCallCheck(this, RouterMap);

    return _possibleConstructorReturn(this, (RouterMap.__proto__ || Object.getPrototypeOf(RouterMap)).apply(this, arguments));
  }

  _createClass(RouterMap, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Router,
          { history: _reactRouter.browserHistory },
          _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Main2.default }),
          _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _Login2.default }),
          _react2.default.createElement(_reactRouter.Route, { path: 'register', component: _Register2.default })
        )
      );
    }
  }]);

  return RouterMap;
}(_react2.default.Component);

exports.default = RouterMap;

//# sourceMappingURL=RouteMap-compiled.js.map