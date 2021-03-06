'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by humengtao on 2016/11/14.
 */
require('styles/MessageUnit.css');

var MessageUnit = function (_React$Component) {
  _inherits(MessageUnit, _React$Component);

  function MessageUnit() {
    _classCallCheck(this, MessageUnit);

    return _possibleConstructorReturn(this, (MessageUnit.__proto__ || Object.getPrototypeOf(MessageUnit)).apply(this, arguments));
  }

  _createClass(MessageUnit, [{
    key: 'render',
    value: function render() {
      if (this.props.align == 'left') {
        return _react2.default.createElement(
          'div',
          { className: 'message-unit', style: { textAlign: 'left' } },
          _react2.default.createElement(
            'h6',
            { className: 'line' },
            _react2.default.createElement(
              'span',
              null,
              '用户:',
              this.props.username,
              ' - 时间:13:12'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('img', { src: 'images/avatar.jpg', style: { float: 'left' } }),
              ': ',
              this.props.msg
            )
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'message-unit', style: { textAlign: 'right' } },
        _react2.default.createElement(
          'h6',
          { className: 'line' },
          _react2.default.createElement(
            'span',
            null,
            '用户:自己 - 时间:13:12'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'span',
            null,
            this.props.msg,
            ' : ',
            _react2.default.createElement('img', { src: 'images/avatar.jpg' })
          )
        )
      );
    }
  }]);

  return MessageUnit;
}(_react2.default.Component);

exports.default = MessageUnit;

//# sourceMappingURL=MessageUnit-compiled.js.map