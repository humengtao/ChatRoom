'use strict';

require('core-js/fn/object/assign');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

var _socket = require('socket.io-react');

var _socket2 = require('socket.io-client');

var _socket3 = _interopRequireDefault(_socket2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Render the main component into the dom
var socket = _socket3.default.connect("localhost:3000");

socket.on('message', function () {
  console.log('123');
});

_reactDom2.default.render(_react2.default.createElement(_Main2.default, null), document.getElementById('app'));

//# sourceMappingURL=index-compiled.js.map