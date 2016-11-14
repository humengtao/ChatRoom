require('styles/MessageBox.css');
let $ =require('jquery');

import React from 'react';
import MessageUnit from './MessageUnit'

class MessageBox extends React.Component {
  componentWillMount(){
    this.setState({height:$(window).height()*0.8});
  }
  render() {
    return (
      <div className="message-box" id="message-box" style={{height:this.state.height}}>
        <MessageUnit/>
      </div>
    )
  }
}

export default MessageBox;
