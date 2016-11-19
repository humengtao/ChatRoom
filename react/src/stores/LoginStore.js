import reflux from 'reflux';
import actions from '../actions/LoginAction';

const LoginStore = reflux.createStore({
  login_state: true,

  listenables: actions,

  onInit(){
    this.trigger(this.login_state);
  },

  onLogin (){
  },

  onLogout (){
  }

});

export default LoginStore;
