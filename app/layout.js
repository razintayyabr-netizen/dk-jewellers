import './globals.css';

export const metadata = {
  title: 'D.K. Jewellers | Gold & Diamond Jewellery Shop | Uttam Nagar, Delhi',
  description: 'D.K. Jewellers — Trusted gold, diamond & bridal jewellery shop in Hastsal, Uttam Nagar, New Delhi. BIS hallmarked, fair pricing, custom orders. Call 8750385065.',
  keywords: 'jewellery shop uttam nagar, gold jewellery delhi, diamond rings uttam nagar, bridal jewellery set delhi, D.K. Jewellers, jeweller near me, gold shop hastsal, jewellery store uttam nagar, best jeweller delhi, wedding jewellery delhi, bangles uttam nagar, necklace shop delhi, earrings jewellery shop, custom jewellery delhi, BIS hallmarked gold uttam nagar',
  openGraph: {
    title: 'D.K. Jewellers | Gold & Diamond Jewellery | Uttam Nagar, Delhi',
    description: 'Trusted gold & diamond jewellery for generations. BIS hallmarked, fair pricing, custom orders. Visit us at 262-A, Hastsal Village, Uttam Nagar.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'D.K. Jewellers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D.K. Jewellers | Gold & Diamond Jewellery | Uttam Nagar, Delhi',
    description: 'Trusted gold & diamond jewellery for generations. BIS hallmarked, fair pricing. Call 8750385065.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://dk-jewellers-puce.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Uttam Nagar, New Delhi" />
        <meta name="geo.position" content="28.62;77.05" />
        <meta name="ICBM" content="28.62, 77.05" />
        <meta name="author" content="D.K. Jewellers" />
        <meta name="theme-color" content="#D4A853" />
        <link rel="canonical" href="https://dk-jewellers-puce.vercel.app" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          "name": "D.K. Jewellers",
          "description": "Trusted gold & diamond jewellery shop in Hastsal, Uttam Nagar, New Delhi. BIS hallmarked, fair pricing, custom orders.",
          "url": "https://dk-jewellers-puce.vercel.app",
          "telephone": ["+918750385065", "+918851327684"],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "262-A, Hastsal Village, Near Bikaner Sweets",
            "addressLocality": "Uttam Nagar",
            "addressRegion": "Delhi",
            "postalCode": "110059",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.62,
            "longitude": 77.05
          },
          "priceRange": "$$",
          "openingHours": "Mo-Sa 10:00-21:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "120"
          },
          "sameAs": []
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "D.K. Jewellers",
          "image": "https://dk-jewellers-puce.vercel.app/images/hero.jpg",
          "url": "https://dk-jewellers-puce.vercel.app",
          "telephone": "+918750385065",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "262-A, Hastsal Village, Near Bikaner Sweets, Uttam Nagar",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110059",
            "addressCountry": "IN"
          }
        }) }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}