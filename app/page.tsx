import About from './components/about/About';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import Hero from './components/hero/Hero';
import Music from './components/music/Music';
import Navbar from './components/navbar/Navbar';
import Planet from './components/planet/Planet';
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
      <div style={{ height: 5000 }} />
      <section id="contact">
        <div style={{ height: 5000 }} />
      </section>
    </main>
  </>
);

export default App;
