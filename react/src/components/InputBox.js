/**
 * Created by humengtao on 2016/11/14.
 */
require('styles/InputBox.css');

import React from 'react';

class InputBox extends React.Component {
  render() {
    return (
      <div>
        <textarea name="input" id="input">
      </textarea>
       <button id="send">
         send
       </button>
      </div>
    );
  }
}

export default InputBox;
