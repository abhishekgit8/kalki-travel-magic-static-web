import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Star, Shield, Wifi, Clock } from 'lucide-react';
import heroImage from '../assets/hero-traveller.jpg';
import ParticleBackground from './ParticleBackground';

const words = ['Adventure', 'Comfort', 'Luxury', 'Experience'];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden bg-dark-bg">
      <ParticleBackground />

      {/* Background gradients */}
      <div className="absolute top-20 left-0 w-64 md:w-96 h-64 md:h-96 bg-neon-blue/20 rounded-full blur-[80px] md:blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-neon-purple/10 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse-slow" />

      <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-6"
          >
            <span className="px-3 md:px-4 py-1 md:py-1.5 border border-neon-gold/50 rounded-full text-neon-gold text-xs md:text-sm font-medium tracking-wider uppercase bg-neon-gold/10 backdrop-blur-sm">
              14 Seater Premium Traveller
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 md:mb-6">
            <div className="h-[60px] sm:h-[80px] md:h-[100px] overflow-hidden">
              <motion.span
                key={wordIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue font-extrabold uppercase tracking-tighter"
              >
                {words[wordIndex]}
              </motion.span>
            </div>
            <span className="text-white block">Awaits</span>
          </h1>

          <p className="text-gray-400 text-base md:text-xl mb-6 md:mb-8 max-w-lg leading-relaxed">
            Embark on a journey of luxury and comfort with{' '}
            <span className="text-white font-semibold">Kalki Travels</span>.
            Soundproof interiors, ambient lighting, and premium seating for your perfect getaway.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            <motion.a
              href="https://wa.me/919633657120?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20booking%20a%20ride."
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-neon-red hover:bg-red-600 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(255,0,80,0.4)] flex items-center gap-2 transition-all relative overflow-hidden group text-sm md:text-base"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Book Your Ride</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 border border-white/20 hover:border-neon-blue text-white rounded-lg flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,204,255,0.3)] hover:bg-neon-blue/10 group text-sm md:text-base"
            >
              <span>View Gallery</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Quick badges */}
          <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
            {[
              { icon: <Shield size={12} />, text: 'Safe & Secure' },
              { icon: <Wifi size={12} />, text: 'GPS Tracked' },
              { icon: <Clock size={12} />, text: '24/7 Available' },
            ].map((badge, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 bg-white/5 rounded-full text-gray-400 text-[10px] md:text-xs"
              >
                {badge.icon}
                {badge.text}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 md:mt-12 flex items-center gap-6 md:gap-8 border-t border-white/10 pt-6 md:pt-8 justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-white font-display">200+</p>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Happy Trips</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-white flex items-center gap-1 font-display">
                4.9 <Star size={16} className="text-neon-gold fill-neon-gold md:size-20" />
              </p>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Rating</p>
            </motion.div>
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
          <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue rounded-2xl blur opacity-20 md:opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-border-dance" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-dark-card border border-white/10 aspect-[4/5] md:aspect-square lg:aspect-[4/3]">
            <img
              src={heroImage}
              alt="Kalki Force Traveller"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />

            {/* Floating badge - repositioned for mobile */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-3 right-3 md:bottom-6 md:right-6 bg-dark-bg/80 backdrop-blur-md p-2.5 md:p-4 rounded-lg md:rounded-xl border border-white/20 shadow-xl"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-1.5 md:p-2 bg-neon-red/20 rounded-full">
                  <MapPin className="text-neon-red" size={18} />
                </div>
                <div>
                  <p className="text-white text-xs md:text-sm font-bold">Kerala</p>
                  <p className="text-[10px] md:text-xs text-gray-400">All India Permit</p>
                </div>
              </div>
            </motion.div>

            {/* Floating accent - hidden on very small screens */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:block absolute top-4 left-4 md:top-6 md:left-6 bg-dark-bg/80 backdrop-blur-md p-2.5 md:p-3 rounded-lg md:rounded-xl border border-neon-blue/30 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white text-[10px] md:text-xs font-medium">Available Now</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-neon-blue rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
