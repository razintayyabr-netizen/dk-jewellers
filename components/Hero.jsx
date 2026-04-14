export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img src="/images/hero.jpg" alt="" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span>✨ Trusted Since Generations</span>
        </div>
        <h1 className="hero-title"><span className="gradient-gold">D.K. Jewellers</span></h1>
        <div className="hero-subtitle">
          <div className="hero-line" />
          <p className="hero-subtitle-text">Hastal, Uttam Nagar</p>
          <div className="hero-line" style={{ background: 'linear-gradient(to left, transparent, rgba(212,168,83,0.4))' }} />
        </div>
        <p className="hero-desc">Exquisite gold &amp; diamond jewellery crafted with love. Timeless pieces for every occasion — weddings, celebrations, and everyday elegance.</p>
        <div className="hero-ctas">
          <a href="https://wa.me/91875038065?text=Hi! I'd like to enquire about jewellery" target="_blank" className="btn-primary">
            <span>Enquire Now</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#collections" className="btn-outline">View Collections</a>
        </div>
        <div className="hero-pills">
          <div className="hero-pill"><span>📍</span><span>Hastal, Uttam Nagar, Delhi</span></div>
          <div className="hero-pill"><span>📞</span><a href="tel:+91875038065" style={{ color: '#9CA3AF' }}>875038065</a></div>
          <div className="hero-pill"><span>📞</span><a href="tel:+918851327684" style={{ color: '#9CA3AF' }}>8851327684</a></div>
        </div>
      </div>
    </section>
  );
}