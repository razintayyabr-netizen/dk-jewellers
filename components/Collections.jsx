const categories = [
  { name: 'Rings', desc: 'Engagement, wedding & fashion rings in gold & diamond.', tag: 'Popular', image: '/images/rings.jpg' },
  { name: 'Necklaces', desc: 'Stunning necklaces & pendants for every occasion.', tag: '', image: '/images/necklace.jpg' },
  { name: 'Earrings', desc: 'Elegant earrings — jhumkas, studs, drops & more.', tag: 'Trending', image: '/images/earrings.jpg' },
  { name: 'Bangles', desc: 'Traditional & modern bangles in gold & mixed metals.', tag: '', image: '/images/bangles.jpg' },
  { name: 'Pendants', desc: 'Beautiful pendants & lockets — perfect for gifting.', tag: '', image: '/images/pendant.jpg' },
  { name: 'Chains', desc: 'Gold chains in various designs — lightweight to heavy.', tag: '', image: '/images/chain.jpg' },
  { name: 'Bridal Sets', desc: 'Complete bridal jewellery sets for your special day.', tag: 'Premium', image: '/images/bridal.jpg' },
  { name: 'Custom Orders', desc: 'Get jewellery custom-made to your design & budget.', tag: 'Special', image: '/images/pendant.jpg' },
];

export default function Collections() {
  return (
    <section id="collections" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Our Collections</span>
          <h2 className="section-title">Exquisite <span className="gradient-gold">Jewellery</span></h2>
          <div className="section-line" />
        </div>
        <div className="cat-grid">
          {categories.map((cat, i) => (
            <div key={i} className="cat-card">
              <div className="cat-card-img">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                {cat.tag && <span className="cat-tag">{cat.tag}</span>}
              </div>
              <div className="cat-card-body">
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
                <a href={`https://wa.me/918750385065?text=Hi! I'm interested in ${cat.name}`} target="_blank" className="cat-book">Enquire →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}