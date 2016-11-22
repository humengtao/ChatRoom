'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _SocketAction = require('../actions/SocketAction');

var _SocketAction2 = _interopRequireDefault(_SocketAction);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _LoginStore = require('../stores/LoginStore');

var _LoginStore2 = _interopRequireDefault(_LoginStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = _reflux2.default.createStore({
  items: [],

  users: [],

  listenables: _SocketAction2.default,

  onSocket: function onSocket() {
    var _this = this;

    this.socket = (0, _socket2.default)('http://localhost:3000');
    this.socket.on('server:broadcast', function (data) {
      _this.onReceive(data);
    });
    this.socket.on('server:allUser', function (data) {
      _this.users = [];
      data.map(function (index) {
        _this.users.push(index.username);
      });
      _this.trigger({ users: _this.users });
    });
    this.socket.on('server:newUser', function (data) {
      if (data != _LoginStore2.default.username && _LoginStore2.default.username != '') {
        _this.users.push(data);
        _this.trigger({ users: _this.users });
      }
    });
    this.socket.on('server:userLeave', function (data) {
      console.log(data + ' 离开');
    });
  },
  onGet: function onGet() {
    this.trigger({ items: this.items });
  },
  onSend: function onSend(data) {
    this.socket.emit('client:send', data);
  },
  onReceive: function onReceive(data) {
    if (data.username == _LoginStore2.default.username) {
      data.align = 'right';
    } else {
      data.align = 'left';
    }
    this.items.push(data);
    this.trigger({ items: this.items });
  },
  onNew: function onNew(data) {
    this.socket.emit('client:newUser', data);
  },
  onAll: function onAll() {
    this.socket.emit('client:allUser');
  }
});

exports.default = Store;

//# sourceMappingURL=SocketStore-compiled.js.map