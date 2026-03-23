export default function Header() {
  return (
    <header>
      {/* NAV */}
      <nav>
        <div className="nav-logo" onClick={() => console.log('showPage: home')}>
          Quick<span>Serve</span>
        </div>
        <div className="menu-container" id="menuContainer">
          <button className="menu-toggle" onClick={() => console.log('toggleMenu')}>
            ☰
          </button>
          <div className="menu-items" id="menuItems">
            <div className="nav-links">
              <button
                onClick={() => console.log('showPage: home')}
                id="nav-home"
                className="active"
              >
                Home
              </button>
              <button
                onClick={() => console.log('showPage: services')}
                id="nav-services"
              >
                Services
              </button>
              <button
                onClick={() => console.log('showPage: community')}
                id="nav-community"
              >
                Community
              </button>
              <button
                onClick={() => console.log('showPage: about')}
                id="nav-about"
              >
                About
              </button>
              <button
                onClick={() => console.log('showPage: contact')}
                id="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="nav-avatar" title="Profile">
          QKSRV
        </div>
        <img src="/image/image.png" alt="profile" className="profile" />
      </nav>
    </header>
  );
}
