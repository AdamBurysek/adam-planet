import Footer from './_components/footer/Footer';
import Navbar from './_components/navbar/Navbar';
import Planet from './_components/planet/Planet';
import About from './_sections/about/About';
import Contact from './_sections/contact/Contact';
import Gallery from './_sections/gallery/Gallery';
import Hero from './_sections/hero/Hero';
import Music from './_sections/music/Music';
import './globals.css';

const App = () => (
  <>
    <Navbar />
    <Planet />
    <main>
      <Hero />
      <About />
      <Music />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
