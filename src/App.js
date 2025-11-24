// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// On importera les autres pages ici quand Azer les aura faites

function App() {
  // On utilise un "état" pour savoir quelle page est active
  const [activePage, setActivePage] = useState('home');

  // Fonction pour changer de page
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0); // Pour remonter en haut de la page
  };

  // Affiche le bon composant de page en fonction de l'état
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      // Les autres cas (about, gallery, contact) viendront plus tard
      // case 'about':
      //   return <AboutPage />;
      // case 'gallery':
      //   return <GalleryPage />;
      // case 'contact':
      //   return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header onNavClick={navigateTo} activePage={activePage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;