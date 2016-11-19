'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _MessageUnit = require('./MessageUnit');

var _MessageUnit2 = _interopRequireDefault(_MessageUnit);

var _SocketAction = require('../actions/SocketAction');

var _SocketAction2 = _interopRequireDefault(_SocketAction);

var _SocketStore = require('../stores/SocketStore');

var _SocketStore2 = _interopRequireDefault(_SocketStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/MessageBox.css');

var $ = require('jquery');

var MessageBox = function (_React$Component) {
  _inherits(MessageBox, _React$Component);

  function MessageBox() {
    _classCallCheck(this, MessageBox);

    var _this = _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this));

    _SocketAction2.default.get();
    _this.state = {
      height: $(window).height() * 0.5
    };
    return _this;
  }

  _createClass(MessageBox, [{
    key: 'render',
    value: function render() {
      if (!!this.state.store) {
        return _react2.default.createElement(
          'div',
          { className: 'message-box', id: 'message-box', style: { height: this.state.height } },
          this.state.store.map(function (data, index) {
            if (!!data.msg) return _react2.default.createElement(_MessageUnit2.default, { key: index.toString(), msg: data.msg });
          })
        );
      }
      return _react2.default.createElement('div', { className: 'message-box', id: 'message-box', style: { height: this.state.height } });
    }
  }]);

  return MessageBox;
}(_react2.default.Component);

_reactMixin2.default.onClass(MessageBox, _reflux2.default.connect(_SocketStore2.default, 'store'));

exports.default = MessageBox;

//# sourceMappingURL=MessageBox-compiled.js.map