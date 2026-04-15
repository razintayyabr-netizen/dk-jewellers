export default function Delivery() {
  return (
    <section id="delivery" className="section" style={{ background: 'var(--dark-2)' }}>
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Online Delivery</span>
          <h2 className="section-title">Order Online — <span className="gradient-gold">Delivered to You</span></h2>
          <div className="section-line" />
        </div>
        <div className="delivery-grid">
          <div className="delivery-card">
            <div className="delivery-icon">📱</div>
            <h3>Order via WhatsApp</h3>
            <p>Send us your requirement on WhatsApp. Share photos, designs, or references. We confirm details and price.</p>
          </div>
          <div className="delivery-step">→</div>
          <div className="delivery-card">
            <div className="delivery-icon">💰</div>
            <h3>Pay Securely</h3>
            <p>Bank transfer, UPI, or cash on delivery for Delhi NCR. Full invoice and BIS certificate provided.</p>
          </div>
          <div className="delivery-step">→</div>
          <div className="delivery-card">
            <div className="delivery-icon">📦</div>
            <h3>Insured Delivery</h3>
            <p>Secure, insured shipping across India. Tamper-proof packaging with real-time tracking.</p>
          </div>
          <div className="delivery-step">→</div>
          <div className="delivery-card">
            <div className="delivery-icon">💎</div>
            <h3>Receive & Enjoy</h3>
            <p>Open your jewellery with BIS certificate, warranty card, and invoice. 100% satisfaction guaranteed.</p>
          </div>
        </div>
        <div className="delivery-cta">
          <a href="https://wa.me/918750385065?text=Hi! I'd like to order jewellery for delivery" target="_blank" className="btn-primary">
            <span>📦 Order for Delivery</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="tel:+918750385065" className="btn-outline">📞 Call to Order</a>
        </div>
        <div className="delivery-badges">
          <div className="delivery-badge">✓ Insured Shipping</div>
          <div className="delivery-badge">✓ BIS Hallmarked</div>
          <div className="delivery-badge">✓ Secure Packaging</div>
          <div className="delivery-badge">✓ All India</div>
          <div className="delivery-badge">✓ COD Available (Delhi NCR)</div>
        </div>
      </div>
    </section>
  );
}