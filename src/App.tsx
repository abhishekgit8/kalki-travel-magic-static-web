
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-red selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
