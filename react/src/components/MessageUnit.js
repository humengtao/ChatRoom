/**
 * Created by humengtao on 2016/11/14.
 */
require('styles/MessageUnit.css');

import React from 'react';

class MessageUnit extends React.Component {
  render() {
    return (
      <div className="message-unit">
        {this.props.msg}
      </div>
    );
  }
}

export default MessageUnit;
