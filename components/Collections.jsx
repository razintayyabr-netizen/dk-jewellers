const categories = [
  { name: 'Gold Rings', desc: 'Engagement rings, wedding bands, cocktail rings, solitaires, cluster rings in 22K & 18K gold.', tag: 'Popular', image: '/images/rings.jpg', items: ['Diamond Rings', 'Solitaire Rings', 'Cluster Rings', 'Wedding Bands', 'Fashion Rings', 'Signet Rings'] },
  { name: 'Necklaces', desc: 'Gold necklaces, chokers, long chains with pendant sets for every occasion.', tag: 'Best Seller', image: '/images/necklace.jpg', items: ['Gold Necklaces', 'Choker Sets', 'Long Haram', 'Temple Jewellery', 'Layered Necklaces', 'Pearl Necklaces'] },
  { name: 'Earrings', desc: 'Jhumkas, studs, drops, chandbalis, hoops — traditional & modern designs.', tag: 'Trending', image: '/images/earrings.jpg', items: ['Jhumka Earrings', 'Chandbali', 'Stud Earrings', 'Drop Earrings', 'Hoop Earrings', 'Chandelier Earrings'] },
  { name: 'Bangles', desc: 'Gold bangles, kadas, cuffs — plain, carved, stone-studded designs.', tag: '', image: '/images/bangles.jpg', items: ['Gold Bangles', 'Stone Bangles', 'Kada', 'Cuff Bangles', 'Carved Bangles', 'Daily Wear Bangles'] },
  { name: 'Pendants', desc: 'Gold pendants, lockets, religious motifs — perfect for gifting.', tag: '', image: '/images/pendant.jpg', items: ['Gold Pendants', 'Diamond Pendants', 'Lockets', 'Religious Pendants', 'Heart Pendants', 'Alphabet Pendants'] },
  { name: 'Chains', desc: 'Gold chains — rope, box, cable, snake, wheat patterns in 22K gold.', tag: '', image: '/images/chain.jpg', items: ['Rope Chain', 'Box Chain', 'Cable Chain', 'Snake Chain', 'Wheat Chain', 'Singapore Chain'] },
  { name: 'Bridal Sets', desc: 'Complete bridal jewellery — necklace, earrings, bangles, maang tikka, nose ring.', tag: 'Premium', image: '/images/bridal.jpg', items: ['Heavy Bridal Set', 'Light Bridal Set', 'Temple Bridal Set', 'Diamond Bridal Set', 'Kundan Bridal Set', 'Custom Bridal Set'] },
  { name: 'Mangalsutra', desc: 'Traditional & modern mangalsutra designs in gold & diamond.', tag: 'New', image: '/images/chain.jpg', items: ['Traditional Mangalsutra', 'Diamond Mangalsutra', 'Modern Mangalsutra', 'Black Bead Mangalsutra', 'Short Mangalsutra', 'Layered Mangalsutra'] },
  { name: 'Nose Pins & Rings', desc: 'Gold nose pins, rings, nath — traditional & contemporary styles.', tag: '', image: '/images/rings.jpg', items: ['Nose Pin', 'Nose Ring', 'Nath', 'Diamond Nose Pin', 'Gold Nath', 'Clip Nose Pin'] },
  { name: 'Anklets & Toe Rings', desc: 'Gold anklets (paayal), toe rings for daily & occasion wear.', tag: '', image: '/images/bangles.jpg', items: ['Gold Anklets', 'Stone Anklets', 'Toe Rings', 'Daily Wear Anklet', 'Bridal Anklet', 'Modern Anklet'] },
  { name: 'Kids Jewellery', desc: 'Lightweight gold jewellery for children — earrings, bangles, chains.', tag: '', image: '/images/pendant.jpg', items: ['Kids Earrings', 'Kids Bangles', 'Kids Chain', 'Kids Pendant', 'Baby Bangles', 'Kids Bracelet'] },
  { name: 'Custom Orders', desc: 'Bring your design — we craft it. Custom wedding bands, name pendants, & more.', tag: 'Special', image: '/images/bridal.jpg', items: ['Custom Rings', 'Name Pendants', 'Custom Bangles', 'Replicate Design', 'Engraved Jewellery', 'Budget Custom'] },
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
                <img src={cat.image} alt={`${cat.name} - D.K. Jewellers Hastsal Uttam Nagar`} loading="lazy" />
                {cat.tag && <span className="cat-tag">{cat.tag}</span>}
              </div>
              <div className="cat-card-body">
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
                <div className="cat-items">
                  {cat.items.map((item, j) => (
                    <span key={j} className="cat-item">{item}</span>
                  ))}
                </div>
                <a href={`https://wa.me/918750385065?text=Hi! I'm interested in ${cat.name} at D.K. Jewellers`} target="_blank" className="cat-book">Enquire →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}