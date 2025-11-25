import React, { useState } from 'react';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Contactez-nous</h2>
      
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="form-custom">
            {submitted && (
              <div id="successMessage" className="success-message mb-4">
                <p className="fs-5 fw-bold mb-2">Message envoyé avec succès! 🚀</p>
                <p className="mb-0">Nous vous répondrons bientôt.</p>
              </div>
            )}
            
            <form id="contactForm" onSubmit={handleContactSubmit} style={{ display: submitted ? 'none' : 'block' }}>
              <div className="mb-4">
                <label className="form-label fw-semibold">Nom</label>
                <input type="text" className="form-control form-control-custom" name="nom" placeholder="Votre nom" required />
              </div>
              
              <div className="mb-4">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control form-control-custom" name="email" placeholder="votre.email@exemple.com" required />
              </div>
              
              <div className="mb-4">
                <label className="form-label fw-semibold">Message</label>
                <textarea className="form-control form-control-custom" name="message" rows="5" placeholder="Votre message..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-submit w-100">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;