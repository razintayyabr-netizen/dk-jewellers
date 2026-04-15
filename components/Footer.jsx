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

      {/* WhatsApp Float */}
      <a href="https://wa.me/918750385065?text=Hi! I'd like to enquire about jewellery" target="_blank" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </footer>
  );
}