require('styles/MessageBox.css');
let $ = require('jquery');

import React from 'react';
import MessageUnit from './MessageUnit'
import io from 'socket.io-client';
let socket = io('http://localhost:3000');

class MessageBox extends React.Component {
  constructor() {
    super();
    this.state={
      children:[]
    };
    socket.on('server:broadcast', (data)=> {
      this.addUnit(data);
    });
  }

  componentWillMount() {
    this.setState({
      height: $(window).height() * 0.8
    });
  }

  addUnit(data){
    this.state.children.push(data);
    this.setState({
      children:this.state.children
    });
    console.log(data);
  }

  render() {
    return (
      <div className="message-box" id="message-box" style={{height: this.state.height}}
           ref={(div) => this.msgBox = div}>
        {this.state.children.map((data,index)=>{return <MessageUnit key={index.toString()} msg={data.msg}/>})}
      </div>
    )
  }
}

export default MessageBox;
