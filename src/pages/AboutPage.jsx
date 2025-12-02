function AboutPage() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 display-4 fw-bold gradient-text">À Propos de NASA Explorer</h2>
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="about-card mb-4">
            <h3 className="fs-2 fw-bold mb-4">Notre Mission</h3>
            <p className="mb-3 lh-lg">
              NASA Explorer est dédié à partager la passion de l'exploration spatiale avec le monde entier. 
              Nous croyons que l'univers appartient à tous et que chaque personne devrait avoir accès aux 
              merveilles de l'espace.
            </p>
            <p className="lh-lg">
              Depuis notre création, nous avons pour objectif de démocratiser les connaissances spatiales 
              et d'inspirer la prochaine génération d'explorateurs, de scientifiques et de rêveurs.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="about-mini-card about-indigo">
                <h4 className="fs-4 fw-bold mb-3">Vision</h4>
                <p>Créer un pont entre l'humanité et les étoiles, rendant l'espace accessible à tous.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-mini-card about-purple">
                <h4 className="fs-4 fw-bold mb-3">Valeurs</h4>
                <p>Innovation, curiosité, partage des connaissances et respect de l'univers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;