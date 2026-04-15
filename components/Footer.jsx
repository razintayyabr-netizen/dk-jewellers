export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">💎</div>
              <div className="logo-text">
                <h1 className="gradient-gold">D.K. JEWELLERS</h1>
                <p>Hastsal, Uttam Nagar</p>
              </div>
            </div>
            <p>Trusted gold &amp; diamond jewellery for generations. Honest pricing, certified purity, timeless designs.</p>
            <p style={{ color: '#6B7280', marginTop: 16 }}>📍 262-A, Hastsal Village, Near Bikaner Sweets, Uttam Nagar, New Delhi-110059</p>
          </div>
          <div>
            <h4 className="footer-heading">Collections</h4>
            <div className="footer-links">
              <a href="#collections">Rings</a>
              <a href="#collections">Necklaces</a>
              <a href="#collections">Earrings</a>
              <a href="#collections">Bangles</a>
              <a href="#collections">Bridal Sets</a>
              <a href="#collections">Custom Orders</a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <p>📞 <a href="tel:+918750385065">8750385065</a></p>
              <p>📱 <a href="tel:+918851327684">8851327684</a></p>
              <p>💬 <a href="https://wa.me/918750385065" target="_blank">WhatsApp</a></p>
              <p>📍 262-A, Hastsal Village, Near Bikaner Sweets, New Delhi-110059</p>
            </div>
          </div>
        </div>
        <div className="section-line" style={{ marginBottom: 24 }} />
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} D.K. Jewellers. All rights reserved.</p>
          <p style={{ color: 'rgba(212,168,83,0.3)' }}>Trusted Since Generations 💎</p>
        </div>
      </div>
    </footer>
  );
}