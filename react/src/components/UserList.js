/**
 * Created by humengtao on 2016/11/20.
 */
require('styles/UserList.css');

import React from 'react';

class UserList extends React.Component {
  render(){
    return (
       <div className="user-list">
         <h4 className="tex-center">当前在线用户</h4>
         <ul>
           <li><img src="images/avatar.jpg" alt=""/> (hello)</li>
           <li><img src="images/avatar.jpg" alt=""/> (hello)</li>
           <li><img src="images/avatar.jpg" alt=""/> (hello)</li>
           <li><img src="images/avatar.jpg" alt=""/> (hello)</li>
         </ul>
       </div>
    );
  }
}

export default UserList;
