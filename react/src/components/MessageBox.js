require('styles/MessageBox.css');

import React from 'react';
import MessageUnit from './MessageUnit'
import io from 'socket.io-client';

let $ = require('jquery');
let socket = io('http://localhost:3000');

class MessageBox extends React.Component {
  constructor() {
    super();

    // init children
    this.state = {
      children: []
    };

    // set socket event listener
    socket.on('server:broadcast', (data)=> {
      this.addUnit(data);
    });
  }

  componentWillMount() {

    // dynamically set message box height
    this.setState({
      height: $(window).height() * 0.8
    });
  }

  // add child
  addUnit(data) {
    this.state.children.push(data);
    this.setState({
      children: this.state.children
    });
  }

  render() {
    return (
      <div className="message-box" id="message-box" style={{height: this.state.height}}
           ref={(div) => this.msgBox = div}>
        {this.state.children.map((data, index)=> {
          return <MessageUnit key={index.toString()} msg={data.msg}/>
        })}
      </div>
    )
  }
}

export default MessageBox;
