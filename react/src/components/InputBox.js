/**
 * Created by humengtao on 2016/11/14.
 */
require('styles/InputBox.css');

import React from 'react';
import io from 'socket.io-client';
let socket = io('http://localhost:3000');

class InputBox extends React.Component {
  constructor() {
    super();
    this.state={
      msg: ''
    };
    this.sendMsg=this.sendMsg.bind(this);
    this.setMsg=this.setMsg.bind(this);
  }

  sendMsg() {
    socket.emit('client:send',{msg:this.state.msg});
    this.setState({
      msg:''
    });
    this.textInput.value='';
  }

  setMsg(e) {
    this.setState({
      msg:e.target.value
    })
  }

  render() {
    return (
      <div>
        <textarea name="input" id="input" onChange={this.setMsg} ref={(input) => this.textInput = input}>
      </textarea>
        <button id="send" onClick={this.sendMsg}>
          send
        </button>
      </div>
    );
  }
}

export default InputBox;
