import GalleryCard from '../components/GalleryCard';

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
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 display-4 fw-bold gradient-text">Galerie Spatiale</h2>
      
      <div className="row g-4">
        {galleryItems.map((item, index) => (
          <GalleryCard 
            key={index}
            title={item.title}
            image={item.image}
            color={item.color}
            wikipediaName={item.wikipediaName}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;