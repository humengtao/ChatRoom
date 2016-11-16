'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MessageUnit = require('./MessageUnit');

var _MessageUnit2 = _interopRequireDefault(_MessageUnit);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/MessageBox.css');
var $ = require('jquery');

var socket = (0, _socket2.default)('http://localhost:3000');

var MessageBox = function (_React$Component) {
  _inherits(MessageBox, _React$Component);

  function MessageBox() {
    _classCallCheck(this, MessageBox);

    var _this = _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this));

    socket.on('server:broadcast', function (data) {});
    return _this;
  }

  _createClass(MessageBox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        height: $(window).height() * 0.8
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'message-box', id: 'message-box', style: { height: this.state.height },
          ref: function ref(div) {
            return _this2.msgBox = div;
          } },
        this.props.children
      );
    }
  }]);

  return MessageBox;
}(_react2.default.Component);

exports.default = MessageBox;

//# sourceMappingURL=MessageBox-compiled.js.map