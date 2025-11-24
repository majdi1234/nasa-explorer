// src/pages/GalleryPage.js
import React from 'react';

const galleryItems = [
  { title: "Nébuleuse de l'Aigle", color: "gallery-purple" },
  { title: "Mars - Cratère Gale", color: "gallery-red" },
  { title: "Jupiter et ses lunes", color: "gallery-orange" },
  { title: "Galaxie d'Andromède", color: "gallery-blue" },
  { title: "Station Spatiale ISS", color: "gallery-gray" },
  { title: "Saturne et ses anneaux", color: "gallery-yellow" }
];

function GalleryPage() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Galerie Spatiale</h2>
      
      <div className="row g-4">
        {galleryItems.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className={`gallery-item ${item.color}`}>
              <div className="gallery-content">
                <i className="bi bi-image gallery-icon"></i>
                <h3 className="fs-4 fw-bold mt-2">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;