'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _LoginAction = require('../actions/LoginAction');

var _LoginAction2 = _interopRequireDefault(_LoginAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginStore = _reflux2.default.createStore({
  login_state: true,

  listenables: _LoginAction2.default,

  onInit: function onInit() {
    this.trigger(this.login_state);
  },
  onLogin: function onLogin() {},
  onLogout: function onLogout() {}
});

exports.default = LoginStore;

//# sourceMappingURL=LoginStore-compiled.js.map