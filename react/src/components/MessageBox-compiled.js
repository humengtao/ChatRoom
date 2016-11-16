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

    // init children
    var _this = _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this));

    _this.state = {
      children: []
    };

    // set socket event listener
    socket.on('server:broadcast', function (data) {
      _this.addUnit(data);
    });
    return _this;
  }

  _createClass(MessageBox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      // dynamically set message box height
      this.setState({
        height: $(window).height() * 0.8
      });
    }

    // add child

  }, {
    key: 'addUnit',
    value: function addUnit(data) {
      this.state.children.push(data);
      this.setState({
        children: this.state.children
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
        this.state.children.map(function (data, index) {
          return _react2.default.createElement(_MessageUnit2.default, { key: index.toString(), msg: data.msg });
        })
      );
    }
  }]);

  return MessageBox;
}(_react2.default.Component);

exports.default = MessageBox;

//# sourceMappingURL=MessageBox-compiled.js.map