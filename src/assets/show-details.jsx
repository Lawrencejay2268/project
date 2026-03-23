export default function ShowDetails() {
  return (
    <div className="profile-page active" id="profile-page">
      <div className="profile-hero">
        <div>
          <button className="back-btn" onClick={() => console.log('goBack')}>
            ← Back to Services
          </button>
          <div className="profile-cat-tag" id="p-cat"></div>
          <div className="profile-name" id="p-name"></div>
          <div className="profile-addr" id="p-addr"></div>
          <div className="profile-stats">
            <div className="profile-stat">
              <div className="val" id="p-rating"></div>
              <div className="lbl">Rating</div>
            </div>
            <div className="profile-stat">
              <div className="val" id="p-reviews"></div>
              <div className="lbl">Reviews</div>
            </div>
            <div className="profile-stat">
              <div className="val" id="p-tips"></div>
              <div className="lbl">Tips</div>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <button className="btn-directions" id="p-dir-btn" onClick={() => console.log('openDirections')}>
            🗺 Get Directions
          </button>
          <button className="btn-save" onClick={() => console.log('saveService')}>
            🔖 Save Service
          </button>
          <button
            className="btn-outline"
            onClick={() => console.log('showPostModal')}
            style={{ marginTop: 0, padding: 10 }}
          >
            ✏️ Post a Tip
          </button>
        </div>
      </div>

      <div className="profile-map-section">
        <iframe
          id="p-map"
          src=""
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="profile-body">
        <div className="profile-main">
          <div className="section-title">Community Reviews & Tips</div>
          <div id="p-reviews-list"></div>
        </div>
        <div className="profile-sidebar">
          <div className="section-title">Service Info</div>
          <div id="p-info"></div>
          <div style={{ marginTop: 24 }}>
            <div className="section-title">Hours</div>
            <div id="p-hours"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
