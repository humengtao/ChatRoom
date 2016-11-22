import Reflux from 'reflux';

const LoginAction = Reflux.createActions([
  'init',
  'login',
  'register',
  'logout',
  'registererror',
  'triggerall'
]);

export default LoginAction;
