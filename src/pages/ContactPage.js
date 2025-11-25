// src/pages/ContactPage.js
import React, { useState } from 'react';

function ContactPage() {
  // États pour les champs du formulaire
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // États pour gérer la soumission et les messages de retour
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Gérer les erreurs venant du backend (ex: validation)
        throw new Error(data.error || 'Quelque chose s\'est mal passé.');
      }

      // Succès !
      setStatus('success');
      setFeedbackMessage('Message envoyé avec succès! 🚀 Nous vous répondrons bientôt.');
      // Vider le formulaire
      setNom('');
      setEmail('');
      setMessage('');

    } catch (error) {
      // Erreur réseau ou du backend
      setStatus('error');
      setFeedbackMessage(error.message || 'Impossible d\'envoyer le message.');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Contactez-nous</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="form-custom">
            {/* Affichage des messages de statut */}
            {status === 'success' && (
              <div className="success-message mb-4">
                <p className="fs-5 fw-bold mb-0">{feedbackMessage}</p>
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-danger mb-4">{feedbackMessage}</div>
            )}

            <form id="contactForm" onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label className="form-label fw-semibold">Nom</label>
                <input
                  type="text"
                  className="form-control form-control-custom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control form-control-custom"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@exemple.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control form-control-custom"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit w-100" disabled={status === 'loading'}>
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;