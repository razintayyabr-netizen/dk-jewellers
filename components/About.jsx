export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-inner">
              <img src="/images/about.jpg" alt="D.K. Jewellers" />
            </div>
            <div className="about-badge">
              <p>Established</p>
              <p className="gradient-gold">Trusted Generations</p>
            </div>
          </div>
          <div className="about-text">
            <span className="section-label">About Us</span>
            <h2>Where <span className="gradient-gold">Tradition</span> Meets Trust</h2>
            <p>D.K. Jewellers has been a trusted name in Hastal, Uttam Nagar for generations. We bring you the finest gold &amp; diamond jewellery — crafted with care, priced with integrity.</p>
            <p className="light">Whether it&apos;s a wedding, festival, or everyday elegance, we have something special for every occasion. Visit our shop and experience the difference of honest craftsmanship.</p>
            <div className="about-stats">
              <div className="about-stat"><span className="icon">💎</span><p className="title">BIS Hallmarked</p><p className="sub">Certified purity</p></div>
              <div className="about-stat"><span className="icon">⚖️</span><p className="title">Fair Pricing</p><p className="sub">Transparent rates</p></div>
              <div className="about-stat"><span className="icon">🪄</span><p className="title">Custom Orders</p><p className="sub">Your design, our craft</p></div>
              <div className="about-stat"><span className="icon">🤝</span><p className="title">Family Trusted</p><p className="sub">Generations of trust</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}