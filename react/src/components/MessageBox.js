require('styles/MessageBox.css');
let $ = require('jquery');

import React from 'react';
import MessageUnit from './MessageUnit'
import io from 'socket.io-client';
let socket = io('http://localhost:3000');

class MessageBox extends React.Component {
  constructor() {
    super();
    socket.on('server:broadcast', (data)=> {
    });
  }

  componentWillMount() {
    this.setState({
      height: $(window).height() * 0.8
    });
  }


  render() {
    return (
      <div className="message-box" id="message-box" style={{height: this.state.height}}
           ref={(div) => this.msgBox = div}>
        {this.props.children}
      </div>
    )
  }
}

export default MessageBox;
