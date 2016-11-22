import reflux from 'reflux';
import actions from '../actions/SocketAction';
import io from 'socket.io-client';
import login_store from '../stores/LoginStore';


const Store = reflux.createStore({
  items: [],

  users:[],

  listenables: actions,

  onSocket(){

    this.socket = io('http://localhost:3000');
    this.socket.on('server:broadcast', (data)=> {
      this.onReceive(data);
    });
  },

  onGet(){
    this.trigger(this.items);
  },

  onSend (data){
    this.socket.emit('client:send', data);
  },

  onReceive (data){
    if(data.username==login_store.username){
      data.align='right';
    }
    else {
      data.align='left';
    }
    this.items.push(data);
    this.trigger(this.items);
  }

});

export default Store;
