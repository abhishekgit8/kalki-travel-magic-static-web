
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import heroImage from '../assets/hero-traveller.jpg';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-bg">
      {/* Background gradients */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 border border-neon-gold/50 rounded-full text-neon-gold text-sm font-medium tracking-wider uppercase bg-neon-gold/10">
              14 Seater Premium Traveller
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Adventure </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue animate-pulse-slow font-extrabold uppercase tracking-tighter filter drop-shadow-[0_0_10px_rgba(255,0,80,0.5)]">
              Awaits +
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Embark on a journey of luxury and comfort with <span className="text-white font-semibold">Kalki Travels</span>. 
            Soundproof interiors, ambient lighting, and premium seating for your perfect getaway.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://wa.me/919633657120?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20booking%20a%20ride."
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neon-red hover:bg-red-600 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(255,0,80,0.4)] flex items-center gap-2 transition-all"
            >
              Book Your Ride <ArrowRight size={20} />
            </motion.a>
            <motion.a
               href="#gallery"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-8 py-4 border border-white/20 hover:border-neon-blue text-white rounded-lg flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,204,255,0.3)] hover:bg-neon-blue/10"
            >
              View Gallery
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
               <p className="text-3xl font-bold text-white">200+</p>
               <p className="text-gray-500 text-sm uppercase tracking-wider">Happy Trips</p>
            </div>
            <div>
               <p className="text-3xl font-bold text-white flex items-center gap-1">4.9 <Star size={20} className="text-neon-gold fill-neon-gold" /></p>
               <p className="text-gray-500 text-sm uppercase tracking-wider">Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative group"
        >
           {/* Animated border/glow */}
           <div className="absolute -inset-1 bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
           
           <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-dark-card border border-white/10 aspect-[4/5] md:aspect-square lg:aspect-[4/3]">
             <img 
               src={heroImage} 
               alt="Kalki Force Traveller" 
               className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
             />
             
             {/* Floating badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-6 right-6 bg-dark-bg/80 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl"
             >
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-neon-red/20 rounded-full">
                   <MapPin className="text-neon-red" size={24} />
                 </div>
                 <div>
                   <p className="text-white text-sm font-bold">Kerala</p>
                   <p className="text-xs text-gray-400">All India Permit</p>
                 </div>
               </div>
             </motion.div>
           </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
