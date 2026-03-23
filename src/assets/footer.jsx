export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            Quick<span>Serve</span>
          </div>
          <div className="footer-desc">
            Access nearby services instantly and connect with trusted providers in
            seconds.
          </div>
        </div>
        <div className="footer-nav">
          <h4>Navigate</h4>
          <ul>
            <li>
              <a onClick={() => console.log('showPage: home')}>Home</a>
            </li>
            <li>
              <a onClick={() => console.log('showPage: services')}>Services</a>
            </li>
            <li>
              <a onClick={() => console.log('showPage: community')}>Community</a>
            </li>
            <li>
              <a onClick={() => console.log('showPage: about')}>About</a>
            </li>
          </ul>
        </div>
        <div className="footer-cats">
          <h4>Categories</h4>
          <ul>
            <li>
              <a>🔴 Medical</a>
            </li>
            <li>
              <a>🟡 Food</a>
            </li>
            <li>
              <a>🟣 Beauty</a>
            </li>
            <li>
              <a>🔧 Repair</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
