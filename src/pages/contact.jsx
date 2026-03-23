export default function Contact() {
  return (
    <div className="page active" id="page-contact">
      <div className="contact-layout">
        <div className="contact-left">
          <div className="tag">GET IN TOUCH</div>
          <h1>
            Contact <span>us</span>
          </h1>
          <p>
            QuickServe loves to hear from Ilonggos! Whether you'd like to
            suggest a new local listing, report inaccurate information, or
            collaborate with the QuickServe — we're here to listen.
          </p>
          <div className="contact-info-row">
            <div className="contact-icon">📍</div>
            <div className="contact-detail">
              <div>Iloilo City, Philippines</div>
              <div className="sub">Jaro District</div>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-icon">✉️</div>
            <div className="contact-detail">
              <div>hello@quickserve.ph</div>
              <div className="sub">We reply within 24hrs</div>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-icon">📞</div>
            <div className="contact-detail">
              <div>+63 933 123 4567</div>
              <div className="sub">Mon–Fri, 9am–5pm</div>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-icon">🕐</div>
            <div className="contact-detail">
              <div>Mon–Fri, 9am–5pm</div>
              <div className="sub">Philippine Standard Time</div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h2>Send a Message</h2>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" id="c-name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              id="c-email"
              placeholder="you@email.com"
              type="email"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Topic</label>
            <select className="form-select" id="c-topic" defaultValue="Suggest a listing">
              <option>Suggest a listing</option>
              <option>Report inaccurate info</option>
              <option>Partnership / Collaboration</option>
              <option>Technical issue</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              id="c-msg"
              placeholder="Tell us more..."
              style={{ minHeight: '120px' }}
            ></textarea>
          </div>
          <button
            className="btn-primary"
            style={{ width: '100%', padding: '14px' }}
            onClick={() => console.log('submitContact')}
          >
            Send Message
          </button>
          <div className="contact-success" id="contact-success">
            ✓ Message sent! We'll get back to you within 24 hours.
          </div>
        </div>
      </div>
    </div>
  );
}
