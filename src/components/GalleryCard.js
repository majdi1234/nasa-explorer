// tawa bech nzidou component reusable lel gallery cards
function GalleryCard({ title, image, color, wikipediaName }) {
  // tawa bech nouvrou wikipedia page lel item
  const handleItemClick = () => {
    const wikipediaUrl = `https://fr.wikipedia.org/wiki/${encodeURIComponent(wikipediaName)}`;
    window.open(wikipediaUrl, "_blank");
  };

  return (
    <div className="col-md-4">
      <div 
        className={`gallery-item ${color}`}
        onClick={handleItemClick}
        style={{ cursor: 'pointer', transition: 'transform 0.3s' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div className="gallery-content">
          <img 
            src={image} 
            alt={title}
            style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <h3 className="fs-4 fw-bold mt-2">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
