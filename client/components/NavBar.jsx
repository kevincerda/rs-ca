import React from 'react';
import Logo from '../../assets/rioseo-logo.png';

const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
    <a href="/" className="navbar-brand">
      <img src={Logo} />
    </a>
    <button
      className="navbar-toggler float-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="navbar-collapse collapse" id="navbar">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Truck Locator
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
