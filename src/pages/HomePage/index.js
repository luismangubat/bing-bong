import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import iphone from '../../assets/iphone.png';

import './style.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <img src={iphone} alt="iphone" className="iphone" />
      <div className="homenav">
        <h2>Bing Bong</h2>
        <div className="links">
          <NavLink to="/map">
            <h4>Map</h4>
          </NavLink>
          <NavLink to="/">
            <h4>Analytics</h4>
          </NavLink>
          <NavLink to="/">
            <h4>Pricing</h4>
          </NavLink>
        </div>
        <Button className="signin" size="large">
          Sign in 
        </Button>
      </div>
      <div className="content">
        <h1>Community</h1>
        <h1>through events</h1>
        <p>
          Bing Bong is a social platform to keep what your friends are up to
        </p>
        <div className="buttons">
          <NavLink to="/Map">
            <Button type='primary' className="play1" size="big">Start now ></Button>
          </NavLink>
          <NavLink to="/Map">
            <Button  className="play" size="big">Demo now ></Button>
          </NavLink>
        </div>
      </div>
      <p className="credits">Made by President Byron</p>
    </div>
  );
};

export default HomePage;