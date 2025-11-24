// Le composant reçoit une fonction `onNavClick` pour changer de page
function Header({ onNavClick, activePage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#" onClick={() => onNavClick('home')}>
          <i className="bi bi-rocket-takeoff fs-2 rocket-icon me-2"></i>
          <span>NASA Explorer</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`} 
                href="#" 
                onClick={() => onNavClick('home')}>
                <i className="bi bi-house me-1"></i> Accueil
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`} 
                href="#" 
                onClick={() => onNavClick('about')}>
                <i className="bi bi-info-circle me-1"></i> À Propos
              </a>
            </li>
            <li className="nav-item">
               <a 
                className={`nav-link ${activePage === 'gallery' ? 'active' : ''}`} 
                href="#" 
                onClick={() => onNavClick('gallery')}>
                <i className="bi bi-image me-1"></i> Galerie
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activePage === 'contact' ? 'active' : ''}`} 
                href="#" 
                onClick={() => onNavClick('contact')}>
                <i className="bi bi-telephone me-1"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;