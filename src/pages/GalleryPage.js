import React from 'react';

// tawa bech nzidou les items avec image jpg et wikipedia name
const galleryItems = [
  { title: "Nébuleuse de l'Aigle", color: "gallery-purple", image: "/assets/Nébuleuse de l'Aigle.jpg", wikipediaName: "Nébuleuse_de_l'Aigle" },
  { title: "Mars - Cratère Gale", color: "gallery-red", image: "/assets/Mars - Cratère Gale.jpg", wikipediaName: "Mars_(planète)" },
  { title: "Jupiter et ses lunes", color: "gallery-orange", image: "/assets/Jupiter et ses lunes.jpg", wikipediaName: "Jupiter_(planète)" },
  { title: "Galaxie d'Andromède", color: "gallery-blue", image: "/assets/Galaxie d'Andromède.jpg", wikipediaName: "Galaxie_d'Andromède" },
  { title: "Station Spatiale ISS", color: "gallery-gray", image: "/assets/Station Spatiale ISS.jpg", wikipediaName: "Station_spatiale_internationale" },
  { title: "Saturne et ses anneaux", color: "gallery-yellow", image: "/assets/Saturne et ses anneaux.jpg", wikipediaName: "Saturne_(planète)" }
];

function GalleryPage() {
  // tawa bech nouvrou wikipedia page lel item
  const handleItemClick = (wikipediaName) => {
    const wikipediaUrl = `https://fr.wikipedia.org/wiki/${encodeURIComponent(wikipediaName)}`;
    window.open(wikipediaUrl, "_blank");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Galerie Spatiale</h2>
      
      <div className="row g-4">
        {galleryItems.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div 
              className={`gallery-item ${item.color}`}
              onClick={() => handleItemClick(item.wikipediaName)}
              style={{ cursor: 'pointer', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div className="gallery-content">
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
                />
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