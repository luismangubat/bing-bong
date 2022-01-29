import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <NavLink to="/"><h2>Bing bong</h2></NavLink>
      <div className="links">
        <div onClick={props.toggleSideBar}>Pin</div>
        <div>Analytics</div>
        <div onClick={props.toggleThankYouModal}>Profile</div>
      </div>
      <div className="scan" onClick={props.enableModal}>Pin</div>
    </div>
  );
};

export default NavBar;