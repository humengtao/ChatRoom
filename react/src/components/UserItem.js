/**
 * Created by humengtao on 2016/11/20.
 */
require('styles/UserList.css');

import React from 'react';

class UserItem extends React.Component {
  render(){
    return (
      <li><img src="images/avatar.jpg" alt=""/> <span> 用户:{this.props.username}</span></li>
    );
  }
}

export default UserItem;
