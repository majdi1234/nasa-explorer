import React, { useEffect } from 'react';

// tawa n7otou function ta3 njoum style .
const createStars = () => {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    starsContainer.innerHTML = ''; // nfarghou container qabel ma nzidou
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = (Math.random() * 3 + 1) + 'px';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        starsContainer.appendChild(star);
    }
};


function HomePage() {
  // useeffect bech yexecuti code baad ma component yetaffich
useEffect(() => {
    createStars();
  }, []); // tableau vide yaani executed marra wa7da

return (
    <>
      
      <section className="hero-section">
        <div id="stars"></div>
        <div className="hero-content text-center px-4">
          <h1 className="hero-title">Explorez l'Univers</h1>
          <p className="fs-4 text-info">Découvrez les merveilles de l'espace avec la NASA</p>
        </div>
      </section>

      <div className="container py-5">
        <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Nos Missions</h2>
        
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="feature-card card-blue text-white">
              <div className="text-center feature-icon">
                <i className="bi bi-globe"></i>
              </div>
              <h3 className="text-center mb-3">Exploration Planétaire</h3>
              <p className="text-center">Découvrez les mystères des planètes de notre système solaire et au-delà.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card card-purple text-white">
              <div className="text-center feature-icon">
                <i className="bi bi-eye"></i>
              </div>
              <h3 className="text-center mb-3">Observation Spatiale</h3>
              <p className="text-center">Utilisez les télescopes les plus avancés pour observer l'univers profond.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card card-indigo text-white">
              <div className="text-center feature-icon">
                <i className="bi bi-cpu"></i>
              </div>
              <h3 className="text-center mb-3">Satellites & Tech</h3>
              <p className="text-center">Développez des technologies spatiales innovantes pour l'avenir.</p>
            </div>
          </div>
        </div>

        <div className="quote-card">
          <div className="d-flex">
            <div className="quote-mark me-3">"</div>
            <div>
              <p className="fs-5 fst-italic mb-3">
                L'exploration spatiale est l'essence même de l'aventure humaine. C'est notre nature de vouloir explorer, de repousser les limites de ce que nous savons et où nous pouvons aller.
              </p>
              <p className="text-info fw-semibold">— NASA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;