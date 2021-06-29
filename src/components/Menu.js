import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem',
  };

  return(
    <div>
      {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/about/foo'>About foo</Link></li>
        <li><Link to='/about/foo?detail=true'>About detail true</Link></li>
      </ul>
      <hr /> */}
      <ul>
        <li><NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink></li>
        <li><NavLink exact to='/about' activeStyle={activeStyle}>About</NavLink></li>
        <li><NavLink exact to='/about/foo' activeStyle={activeStyle}>About foo</NavLink></li>
        <li><NavLink to='/about/foo?detail=true' activeStyle={activeStyle}>About foo true</NavLink></li>
        <li><NavLink to='/posts' activeStyle={activeStyle}>Posts</NavLink></li>
        <li><NavLink to='/user' activeStyle={activeStyle}>User</NavLink></li>
        <li><NavLink to='/users' activeStyle={activeStyle}>Users</NavLink></li>
        <hr />
      </ul>
    </div>
  )
}

export default Menu;