/**
 * Created by humengtao on 2016/11/14.
 */
require('styles/MessageUnit.css');

import React from 'react';

class MessageUnit extends React.Component {
  render() {
    if (this.props.align == 'left') {
      return (
        <div className="message-unit" style={{textAlign: 'left'}}>
          <h6 className="line"><span>Oct.13 13:12</span></h6>
          <p><span><img src="images/avatar.jpg" style={{float: 'left'}}/>: {this.props.msg}</span></p>
        </div>
      )
    }
    return (
      <div className="message-unit" style={{textAlign: 'right'}}>
        <h6 className="line"><span>Oct.13 13:12</span></h6>
        <p><span>{this.props.msg} : <img src="images/avatar.jpg"/></span></p>
      </div>
    )
  }
}

export default MessageUnit;
