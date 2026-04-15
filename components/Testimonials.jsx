export default function Testimonials() {
  const reviews = [
    { name: 'Priya Sharma', text: 'Best gold shop in Uttam Nagar! Fair prices and beautiful designs. My wedding jewellery was all from here.', rating: 5 },
    { name: 'Rajesh Kumar', text: 'Honest pricing, BIS hallmarked jewellery. I have been buying from D.K. Jewellers for 15 years now.', rating: 5 },
    { name: 'Sunita Devi', text: 'They made my custom necklace exactly as I wanted. Amazing craftsmanship and great customer service.', rating: 5 },
    { name: 'Amit Verma', text: 'My family has been coming here for generations. Best place for gold and diamond jewellery in Delhi.', rating: 5 },
  ];

  return (
    <section id="reviews" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our <span className="gradient-gold">Customers Say</span></h2>
          <div className="section-line" />
        </div>
        <div className="review-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                {Array(r.rating).fill('★').map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.name[0]}</div>
                <div>
                  <p className="review-name">{r.name}</p>
                  <p className="review-label">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="review-cta">
          <a href="https://wa.me/918750385065?text=Hi! I'd like to enquire about jewellery" target="_blank" className="btn-primary">
            <span>Enquire Now</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}