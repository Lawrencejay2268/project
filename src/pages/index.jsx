export default function Index() {
  return (
    <div className="page active" id="page-home">
      <div className="hero">
        <div className="hero-left">
          <h1>
            Find the <span>best</span>
            <br />
            services in
            <br />
            Iloilo City
          </h1>
          <p>
            QuickServe connects you to top local services — tried and reviewed
            by your neighbors, the Ilonggos who know best.
          </p>
          <div className="hero-btns">
            <button
              className="btn-primary"
              onClick={() => console.log('showPage: services')}
            >
              Explore services
            </button>
            <button
              className="btn-outline"
              onClick={() => console.log('showPage: community')}
            >
              Read community tips
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image">
            <img src="/image/image.png" alt="logo" className="logo" />
          </div>
        </div>
      </div>

      <div className="why-section">
        <div className="why-heading">
          <div className="why-label">Why QuickServe</div>
          <h2>
            Powered by your
            <br />
            <span>community</span>
          </h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🗣️</div>
            <h4>Community Tips</h4>
            <p>
              Real tips, warnings and kudos from Ilonggos who've actually been
              there. Insider knowledge at your fingertips.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🎯</div>
            <h4>Smart Filtering</h4>
            <p>
              Filter by category sort by score or distance. Find exactly what
              you need whether it's medical, food, beauty or repair.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🏙️</div>
            <h4>Iloilo-First</h4>
            <p>
              Built specifically for Iloilo City. We know Lapaz batchoy, We know
              Teds, This is your city service directory.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">⏱️</div>
            <h4>Live Wait Times</h4>
            <p>
              Community-reported wait times so you know before you go. No more
              showing up to a 2-hour queue.
            </p>
          </div>
        </div>
      </div>

      <div className="top-picks">
        <div className="section-header">
          <div className="header-left">
            <h3>
              Top <span>picks</span>
              <br />
              <small>this week</small>
            </h3>
          </div>
          <button
            className="view-all"
            onClick={() => console.log('showPage: services')}
          >
            view all services
          </button>
        </div>
        <div className="picks-grid">
          <div
            className="pick-card featured"
            onClick={() => console.log('showProfile: teds')}
          >
            <div className="pick-cat">🍜 Food</div>
            <div className="pick-name">Teds Lapaz Batchoy</div>
            <div className="pick-rating">
              <div className="rating-num">4.8</div>
              <div>
                <div className="stars">★★★★★</div>
                <div className="rating-label">Rating Score</div>
              </div>
            </div>
          </div>
          <div
            className="pick-card"
            onClick={() => console.log('showProfile: grace')}
          >
            <div className="pick-cat">💈 Salon</div>
            <div className="pick-name">The Grace Salon</div>
            <div className="pick-rating">
              <div className="rating-num">4.6</div>
              <div>
                <div className="stars">★★★★½</div>
                <div className="rating-label">Rating Score</div>
              </div>
            </div>
          </div>
          <div
            className="pick-card"
            onClick={() => console.log('showProfile: cafe')}
          >
            <div className="pick-cat">☕️ Cafe</div>
            <div className="pick-name">CAFE</div>
            <div className="pick-rating">
              <div className="rating-num">4.6</div>
              <div>
                <div className="stars">★★★★½</div>
                <div className="rating-label">Rating Score</div>
              </div>
            </div>
          </div>
          <div
            className="pick-card"
            onClick={() => console.log('showProfile: stpaul')}
          >
            <div className="pick-cat">🏥 Medical</div>
            <div className="pick-name">ST Paul Hospital</div>
            <div className="pick-rating">
              <div className="rating-num">4.2</div>
              <div>
                <div className="stars">★★★★☆</div>
                <div className="rating-label">Rating Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-band">
        <div>
          <p>
            Know a great spot?
            <br />
            <span>Share it.</span>
          </p>
        </div>
        <button
          className="btn-white"
          onClick={() => console.log('showPage: community')}
        >
          POST A TIP
        </button>
      </div>
    </div>
  );
}
