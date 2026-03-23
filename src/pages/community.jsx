export default function Community() {
  return (
    <div className="page active" id="page-community">
      <div className="community-hero">
        <div
          className="tag"
          style={{
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: 'var(--accent)',
            marginBottom: '8px',
          }}
        >
          COMMUNITY · REAL UPDATE
        </div>
        <h1
          style={{
            fontFamily: '"Syne", sans-serif',
            fontSize: '2.4rem',
            fontWeight: 800,
          }}
        >
          Community <span style={{ color: 'var(--accent)' }}>Board</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '6px' }}>
          Tips, warnings and kudos from Ilonggos who've actually been there.
        </p>
      </div>
      <div className="community-layout">
        <div className="community-feed">
          <div className="post-filters">
            <button className="filter-btn active" onClick={() => console.log('filterPosts: all')}>
              All Posts
            </button>
            <button className="filter-btn" onClick={() => console.log('filterPosts: tip')}>
              Tips
            </button>
            <button className="filter-btn" onClick={() => console.log('filterPosts: warning')}>
              Warning
            </button>
            <button className="filter-btn" onClick={() => console.log('filterPosts: kudos')}>
              Kudos
            </button>
          </div>
          <div id="posts-list"></div>
        </div>
        <div className="community-sidebar">
          <div className="post-form">
            <div className="form-title">✏️ Share a Tip</div>
            <div className="form-group">
              <label className="form-label">Tip Type</label>
              <select className="form-select" id="tip-type" defaultValue="tip">
                <option value="tip">💡 Tip</option>
                <option value="warning">⚠️ Warning</option>
                <option value="kudos">👏 Kudos</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Service Name</label>
              <select className="form-select" id="tip-service" defaultValue="Tatlo Lopez Barbershop">
                <option>Tatlo Lopez Barbershop</option>
                <option>The Grace Salon</option>
                <option>Clinching Gym</option>
                <option>St Paul Hospital</option>
                <option>Bella Phone Repair</option>
                <option>CAFE</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input className="form-input" id="tip-name" placeholder="Anonymous" />
            </div>
            <div className="form-group">
              <label className="form-label">Rating</label>
              <div className="star-input" id="star-input">
                <span onClick={() => console.log('setRating: 1')}>★</span>
                <span onClick={() => console.log('setRating: 2')}>★</span>
                <span onClick={() => console.log('setRating: 3')}>★</span>
                <span onClick={() => console.log('setRating: 4')}>★</span>
                <span onClick={() => console.log('setRating: 5')}>★</span>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-textarea" id="tip-desc" placeholder="Share your experience..."></textarea>
            </div>
            <button className="btn-submit" onClick={() => console.log('submitPost')}>
              Post Tip
            </button>
            <div className="success-msg" id="post-success">
              ✓ Your tip has been shared with the community!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
