import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  return(
    <div>
      <h3>Users</h3>
      <ul>
        <li><Link to="/user/co0ki3">co0ki3</Link></li>
        <li><Link to="/user/kenn3n">kenn3n</Link></li>
        <li><Link to="/user/eka">eka</Link></li>
      </ul>
    </div>
  )
}

export default Users;