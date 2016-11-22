/**
 * Created by humengtao on 2016/11/20.
 */
require('styles/UserList.css');

import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import store from '../stores/SocketStore';

import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {
  render(){
    return (
       <div className="user-list">
         <h4 className="tex-center">当前在线用户</h4>
         <ul>
           {store.users.map((data, index)=> {
               return <UserItem key={"user"+index.toString()} username={data}/>
           })}
         </ul>
       </div>
    );
  }
}

ReactMixin.onClass(UserList, Reflux.connect(store, 'users'));

export default UserList;
