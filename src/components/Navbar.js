import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link exact to="/">
            <div className="logo">
              <img src="./img/icon.png" alt="icon" />
              <h3>Racoont</h3>
            </div>
          </Link>
        </div>
        {uid ? (
          <ul>
            <li className="welcom">
              <Link exact to="/profil">
                <h5>Bienvenue {userData.pseudo}</h5>
              </Link>
            </li>
            <Logout></Logout>
          </ul>
        ) : (
          <ul>
            <li>
              <Link exact to="/profil">
                <img src="./img/icons/login.svg" alt="login" />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
