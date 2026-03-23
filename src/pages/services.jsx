export default function Services() {
  return (
    <div className="page active" id="page-services">
      <div className="services-hero">
        <div className="tag">ILOILO CITY • JARO DISTRICT</div>
        <h1>Service <span>Board</span></h1>
        <p>Directory of services rated and reviewed by the community.</p>
        <div className="cat-filters">
          <button className="cat-btn active" onClick={() => console.log('filterCat: all')}>
            All
          </button>
          <button className="cat-btn" onClick={() => console.log('filterCat: medical')}>
            Medical
          </button>
          <button className="cat-btn" onClick={() => console.log('filterCat: food')}>
            Food
          </button>
          <button className="cat-btn" onClick={() => console.log('filterCat: beauty')}>
            Beauty
          </button>
          <button className="cat-btn" onClick={() => console.log('filterCat: repair')}>
            Repair
          </button>
        </div>
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15726.3!2d122.5622!3d10.7202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="map-overlay">📍 Jaro, Iloilo City</div>
      </div>

      <div className="services-list">
        <div className="services-grid" id="services-grid">
          {/* cards injected by JS/React later */}
        </div>
      </div>
    </div>
  );
}
