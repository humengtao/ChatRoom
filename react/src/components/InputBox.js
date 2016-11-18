/**
 * Created by humengtao on 2016/11/14.
 */
require('styles/InputBox.css');

import React from 'react';
import action from '../actions/SocketAction';

class InputBox extends React.Component {

  sendMsg() {
    // emit event of send msg
    let data={msg:this.textInput.value};
    action.send(data);
    this.textInput.value='';
  }

  render() {
    return (
      <div>
        <textarea name="input" id="input" ref={(input) => this.textInput = input} placeholder="请在这里输入内容">
      </textarea>
        <button id="send" onClick={this.sendMsg.bind(this)}>
          send
        </button>
      </div>
    );
  }
}

export default InputBox;
