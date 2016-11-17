import reflux from 'reflux';
import actions from '../actions/SocketAction';
import io from 'socket.io-client';

const Store = reflux.createStore({
  items: ['123'],

  socket: '',

  listenables: actions,

  onSocket(){
    this.socket = io('http://localhost:3000');
    this.socket.on('server:broadcast', (data)=> {
      this.onReceive(data);
    });
  },

  onGet(){
    this.trigger(this.items)
  },

  onSend (data){
    this.socket.emit('client:send', data);
  },

  onReceive (data){
    this.items.push(data);
    this.trigger(this.items);
  }

});

export default Store;
