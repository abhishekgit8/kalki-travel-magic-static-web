import { Phone, MapPin, Instagram, ArrowUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-black pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[200px] md:h-[300px] bg-neon-purple/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-1 md:col-span-2">
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 mb-6 group"
              whileHover={{ scale: 1.02 }}
            >
              <Logo className="h-12 md:h-14 w-auto" variant="full" />
            </motion.a>
            <p className="text-gray-400 max-w-sm mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              Experience the magic of luxury travel. We provide the best-in-class service for your journeys across Kerala and India.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://www.instagram.com/kalki_travelmagic?igsh=MW9pc3phdnEzdGZhcA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm md:text-base font-bold hover:shadow-[0_0_20px_rgba(255,0,200,0.5)] transition-all duration-300 hover:scale-105 group"
              >
                <Instagram size={18} className="group-hover:rotate-12 transition-transform shrink-0" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Home', 'Experience', 'Gallery', 'Book Now'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Book Now' ? "https://wa.me/919633657120?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20booking%20a%20ride." : `#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-neon-gold transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-neon-gold transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Start Your Journey</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group">
                <Phone className="text-neon-red mt-0.5 shrink-0 group-hover:rotate-12 transition-transform" size={16} />
                <div className="flex flex-col text-sm md:text-base">
                  <span className="hover:text-white transition-colors">+91 96336 57120</span>
                  <span className="hover:text-white transition-colors">+91 92079 50234</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <MapPin className="text-neon-red mt-0.5 shrink-0" size={16} />
                <span className="text-sm md:text-base">Kannur | Taliparamba | Pariyaram</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">Ready to Travel?</h4>
              <p className="text-gray-400 text-xs md:text-sm">Send us a WhatsApp message and get instant response.</p>
            </div>
            <a
              href="https://wa.me/919633657120?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20booking%20a%20ride."
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-neon-red to-neon-purple text-white text-sm md:text-base font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,0,51,0.4)] transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
            >
              <Phone size={16} />
              Book on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-gray-500 text-xs md:text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Kalki Travel Magic. Made with <Heart size={12} className="text-neon-red fill-neon-red" /> in Kerala
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-neon-blue transition-colors text-xs md:text-sm group"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
