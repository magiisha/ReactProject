import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <nav id='nav'>
      <h2 id='logo'>My App</h2>
      <ul id='menu'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Nav;