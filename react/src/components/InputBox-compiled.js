'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SocketAction = require('../actions/SocketAction');

var _SocketAction2 = _interopRequireDefault(_SocketAction);

var _LoginStore = require('../stores/LoginStore');

var _LoginStore2 = _interopRequireDefault(_LoginStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by humengtao on 2016/11/14.
 */
require('styles/InputBox.css');

var InputBox = function (_React$Component) {
  _inherits(InputBox, _React$Component);

  function InputBox() {
    _classCallCheck(this, InputBox);

    return _possibleConstructorReturn(this, (InputBox.__proto__ || Object.getPrototypeOf(InputBox)).apply(this, arguments));
  }

  _createClass(InputBox, [{
    key: 'sendMsg',
    value: function sendMsg() {
      // emit event of send msg
      var data = { msg: this.textInput.value, username: _LoginStore2.default.username };
      _SocketAction2.default.send(data);
      this.textInput.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('textarea', { name: 'input', id: 'input', ref: function ref(input) {
            return _this2.textInput = input;
          }, placeholder: '请在这里输入内容' }),
        _react2.default.createElement(
          'button',
          { id: 'send', onClick: this.sendMsg.bind(this) },
          'send'
        )
      );
    }
  }]);

  return InputBox;
}(_react2.default.Component);

exports.default = InputBox;

//# sourceMappingURL=InputBox-compiled.js.map