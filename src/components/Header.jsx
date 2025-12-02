import { NavLink } from 'react-router-dom';

// lehner mouch mest7a9 props onNavClick w activePage
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        {/* link logo yemchi lel racine "/" */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/assets/NASA_logo.svg.png" 
            alt="NASA Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          <span>NASA Explorer</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
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