require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MessageBox from './MessageBox';
import InputBox from './InputBox';

class AppComponent extends React.Component {
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
