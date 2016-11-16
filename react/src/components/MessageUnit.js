/**
 * Created by humengtao on 2016/11/14.
 */

import React from 'react';

class MessageUnit extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.msg}</h1>
      </div>
    );
  }
}

export default MessageUnit;
