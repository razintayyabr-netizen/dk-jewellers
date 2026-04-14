import Header from '../components/Header';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Collections />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}