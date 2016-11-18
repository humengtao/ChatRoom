require('styles/MessageBox.css');

import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import MessageUnit from './MessageUnit'
import action from '../actions/SocketAction';
import store from '../stores/SocketStore';

let $ = require('jquery');

class MessageBox extends React.Component {

  constructor() {
    super();
    action.get();
    this.state={
      height: $(window).height() * 0.5
    }
  }

  render() {
    if (!!this.state.store) {
      return (
        <div className="message-box" id="message-box" style={{height: this.state.height}}
             ref={(div) => this.msgBox = div}>
          {this.state.store.map((data, index)=> {
            if (!!data.msg)
              return <MessageUnit key={index.toString()} msg={data.msg}/>
          })}
        </div>
      )
    }
    return (
      <div className="message-box" id="message-box" style={{height: this.state.height}}
           ref={(div) => this.msgBox = div}>
      </div>);
  }
}
ReactMixin.onClass(MessageBox, Reflux.connect(store, 'store'));

export default MessageBox;
