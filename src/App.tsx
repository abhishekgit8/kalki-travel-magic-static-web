import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-red selection:text-white">
      <Navbar />
      <Hero />
      <StatsCounter />
      <Features />
      <HowItWorks />
      <Gallery />
      <Destinations />
      <Testimonials />
      <Footer />
      <ScrollToTop />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
