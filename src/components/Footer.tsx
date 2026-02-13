import { Phone, MapPin, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
               <img src={logo} alt="Kalki Travel Magic" className="h-16 w-auto" />
               <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tighter text-white">KALKI</span>
                  <span className="text-sm font-bold tracking-widest text-neon-blue">TRAVEL MAGIC</span>
               </div>
            </a>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Experience the magic of luxury travel. We provide the best-in-class service for your journeys across Kerala and India.
            </p>
            <div className="flex gap-4">
               <a 
                 href="https://www.instagram.com/kalki_travelmagic?igsh=MW9pc3phdnEzdGZhcA%3D%3D" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold hover:shadow-[0_0_20px_rgba(255,0,200,0.5)] transition-all duration-300 hover:scale-105 group"
               >
                 <Instagram size={20} className="group-hover:rotate-12 transition-transform" />
                 <span>Follow on Instagram</span>
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Experience', 'Gallery', 'Book Now'].map((item) => (
                <li key={item}>
                  <a href={item === 'Book Now' ? "https://wa.me/919633657120?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20booking%20a%20ride." : `#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-neon-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Start Your Journey</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="text-neon-red mt-1 shrink-0" size={18} />
                <div className="flex flex-col">
                  <span>+91 96336 57120</span>
                  <span>+91 92079 50234</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-neon-red mt-1 shrink-0" size={18} />
                <span>Kannur | Taliparamba | Pariyaram</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kalki Travel Magic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
