'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _SocketStore = require('../stores/SocketStore');

var _SocketStore2 = _interopRequireDefault(_SocketStore);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UserItem = require('./UserItem');

var _UserItem2 = _interopRequireDefault(_UserItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by humengtao on 2016/11/20.
 */
require('styles/UserList.css');

var UserList = function (_React$Component) {
  _inherits(UserList, _React$Component);

  function UserList() {
    _classCallCheck(this, UserList);

    return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
  }

  _createClass(UserList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'user-list' },
        _react2.default.createElement(
          'h4',
          { className: 'tex-center' },
          '当前在线用户'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _SocketStore2.default.users.map(function (data, index) {
            return _react2.default.createElement(_UserItem2.default, { key: "user" + index.toString(), username: data });
          })
        )
      );
    }
  }]);

  return UserList;
}(_react2.default.Component);

_reactMixin2.default.onClass(UserList, _reflux2.default.connect(_SocketStore2.default, 'users'));

exports.default = UserList;

//# sourceMappingURL=UserList-compiled.js.map