/**
 * Created by humengtao on 2016/11/14.
 */
require('styles/InputBox.css');

import React from 'react';
import action from '../actions/SocketAction';

class InputBox extends React.Component {
  constructor() {
    super();
    // init msg
    this.state={
      msg: ''
    };
  }

  sendMsg() {
    // emit event of send msg
    let data={msg:this.state.msg};
    action.send(data);
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
        <textarea name="input" id="input" onChange={this.setMsg.bind(this)} ref={(input) => this.textInput = input} placeholder="请在这里输入内容">
      </textarea>
        <button id="send" onClick={this.sendMsg.bind(this)}>
          send
        </button>
      </div>
    );
  }
}

export default InputBox;
