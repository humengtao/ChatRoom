import {Link} from 'react-router';

import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
