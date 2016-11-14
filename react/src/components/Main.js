require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MessageBox from './MessageBox';
import InputBox from './InputBox';
import io from 'socket.io-client';
let socket = io(`http://localhost:3000`);

class AppComponent extends React.Component {
  constructor() {
    super();

    socket.on(`server:connection`, data => {
      console.log(data);
    })
  }

  render() {
    return (
      <div className="index">
        <MessageBox/>
        <InputBox/>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
