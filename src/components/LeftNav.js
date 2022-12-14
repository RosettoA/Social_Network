import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <Link to="/" exact activeClassName="active-left-nav">
            <img src="./img/icons/home.svg" alt="home" />
          </Link>
          <br />
          <Link to="/" exact activeClassName="active-left-nav">
            <img src="./img/icons/rocket.svg" alt="rocket" />
          </Link>
          <br />
          <Link to="/" exact activeClassName="active-left-nav">
            <img src="./img/icons/user.svg" alt="user" />
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
