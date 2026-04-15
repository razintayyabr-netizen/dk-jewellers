export default function Robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://dk-jewellers-puce.vercel.app/sitemap.xml',
  };
}