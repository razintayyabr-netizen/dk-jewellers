export default function WhyChoose() {
  const features = [
    { icon: '✨', title: 'BIS Hallmarked', desc: 'Every piece certified for purity. What you see is what you get.' },
    { icon: '⚖️', title: 'Fair Pricing', desc: 'Transparent gold rates with no hidden charges. Honest deals, always.' },
    { icon: '🪄', title: 'Custom Orders', desc: 'Your design, our craft. Get jewellery made exactly how you want it.' },
    { icon: '🤝', title: 'Family Trusted', desc: 'Generations of families trust us. Our reputation is our gold.' },
    { icon: '🔄', title: 'Exchange Policy', desc: 'Easy exchange and upgrade options. Your old gold gets new life.' },
    { icon: '💎', title: 'Latest Designs', desc: 'Fresh designs every season. From traditional to modern — we have it all.' },
    { icon: '🏛️', title: 'Established Legacy', desc: 'Serving since generations in Hastsal, Uttam Nagar. A name you can trust.' },
    { icon: '🔒', title: 'Secure Purchases', desc: 'Proper billing, certificates, and guarantee on every purchase.' },
  ];

  return (
    <section id="why-us" className="section" style={{ background: 'var(--dark-2)' }}>
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Why <span className="gradient-gold">D.K. Jewellers</span>?</h2>
          <div className="section-line" />
        </div>
        <div className="why-grid">
          {features.map((f, i) => (
            <div key={i} className="why-card">
              <div className="why-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}