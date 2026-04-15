export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Visit <span className="gradient-gold">Our Store</span></h2>
          <div className="section-line" />
        </div>
        <div className="contact-grid">
          <a href="tel:+918750385065" className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p className="value">8750385065</p>
            <p className="sub">Tap to call</p>
          </a>
          <a href="https://wa.me/918750385065?text=Hi! I'd like to enquire about jewellery" target="_blank" className="contact-card">
            <div className="contact-icon" style={{ background: 'rgba(16,185,129,0.06)', borderColor: 'rgba(16,185,129,0.08)' }}>💬</div>
            <h3>WhatsApp</h3>
            <p className="value" style={{ color: '#34D399' }}>8750385065</p>
            <p className="sub">Chat &amp; enquire</p>
          </a>
          <a href="tel:+918851327684" className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>Alt. Number</h3>
            <p className="value">8851327684</p>
            <p className="sub">Second line</p>
          </a>
        </div>
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0!2d77.05!3d28.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s262A+Hastsal+Village+Uttam+Nagar+New+Delhi+110059!5e0!3m2!1sen!2sin!4v1" loading="lazy" title="D.K. Jewellers Location" />
        </div>
        <p className="contact-address">📍 262-A, Hastsal Village, Near By Bikaner Sweets, Uttam Nagar, New Delhi-110059 · <a href="https://maps.google.com/?q=262A+Hastsal+Village+Uttam+Nagar+New+Delhi+110059" target="_blank">Open in Google Maps →</a></p>
      </div>
    </section>
  );
}