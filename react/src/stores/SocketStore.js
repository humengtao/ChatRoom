import reflux from 'reflux';
import actions from '../actions/SocketAction';
import io from 'socket.io-client';
import login_store from '../stores/LoginStore';


const Store = reflux.createStore({
  items: [],

  users: [],

  listenables: actions,

  onSocket(){

    this.socket = io('http://localhost:3000');
    this.socket.on('server:broadcast', (data)=> {
      this.onReceive(data);
    });
    this.socket.on('server:allUser', (data)=> {
      this.users = [];
      data.map((index)=> {
        this.users.push(index.username);
      });
      this.trigger({users: this.users});
    });
    this.socket.on('server:newUser', (data)=> {
      if (data != login_store.username && login_store.username != '') {
        this.users.push(data);
        this.trigger({users: this.users});
      }
    });
    this.socket.on('server:userLeave', (data)=> {
      console.log(data + ' 离开');
    });
  },

  onGet(){
    this.trigger({items: this.items});
  },

  onSend (data){
    this.socket.emit('client:send', data);
  },

  onReceive (data){
    if (data.username == login_store.username) {
      data.align = 'right';
    }
    else {
      data.align = 'left';
    }
    this.items.push(data);
    this.trigger({items: this.items});
  },

  onNew(data){
    this.socket.emit('client:newUser', data);
  },

  onAll(){
    this.socket.emit('client:allUser');
  }

});

export default Store;
