import React from 'react';
import { NavLink } from 'react-router-dom';

// lehner mouch mehtaj props onNavClick w activePage
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        {/* link logo yrouh lel racine "/" */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-rocket-takeoff fs-2 rocket-icon me-2"></i>
          <span>NASA Explorer</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/*  bech nbadlou <a> b <NavLink> */}
            <li className="nav-item">
              {/* to hiya path li fil app.js */}
              <NavLink className="nav-link" to="/">
                <i className="bi bi-house me-1"></i> Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <i className="bi bi-info-circle me-1"></i> À Propos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                <i className="bi bi-image me-1"></i> Galerie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <i className="bi bi-telephone me-1"></i> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;