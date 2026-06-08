import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Plus } from 'lucide-react';

const destinations = [
  {
    name: 'Munnar',
    description: 'Hill station with tea plantations',
    distance: '310 km',
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Wayanad',
    description: 'Misty mountains & wildlife',
    distance: '120 km',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Kochi',
    description: 'Queen of the Arabian Sea',
    distance: '230 km',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Thekkady',
    description: 'Wildlife & spice gardens',
    distance: '380 km',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Kovalam',
    description: 'Pristine beach paradise',
    distance: '460 km',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Guruvayur',
    description: 'Famous Krishna temple',
    distance: '200 km',
    color: 'from-yellow-500 to-amber-600',
  },
];

const moreDestinations = [
  'Alleppey', 'Varkala', 'Idukki', 'Kumarakom', 'Bekal',
  'Kozhikode', 'Palakkad', 'Thrissur', 'Kodaikanal',
  'Ooty', 'Coorg', 'Goa', 'Bangalore', 'Chennai',
  'Mysore', 'Pondicherry', 'Madurai', 'Rameshwaram',
];

const Destinations = () => {
  return (
    <section className="py-24 bg-dark-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-purple text-sm uppercase tracking-[0.3em] mb-4 font-medium"
          >
            Explore Kerala & Beyond
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">Destinations We </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Cover</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Popular spots shown below — but we go <span className="text-white font-semibold">everywhere</span>. All India permit. Just name your destination.
          </motion.p>
        </div>

        {/* Scrolling marquee of more destinations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden"
        >
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...moreDestinations, ...moreDestinations].map((dest, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-gray-400 text-sm shrink-0 hover:border-neon-blue/50 hover:text-white transition-colors duration-300"
              >
                <MapPin size={12} className="text-neon-blue" />
                {dest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Destination grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm"
                style={{ background: `linear-gradient(135deg, ${dest.color.includes('green') ? '#10b981' : dest.color.includes('blue') ? '#3b82f6' : dest.color.includes('amber') ? '#f59e0b' : '#06b6d4'}, transparent)` }}
              />
              <div className="relative bg-dark-bg/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${dest.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <MapPin size={18} />
                  </div>
                  <ArrowRight size={16} className="text-gray-600 group-hover:text-neon-blue group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-blue transition-colors duration-300">
                  {dest.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  {dest.description}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  {dest.distance}
                </p>
              </div>
            </motion.div>
          ))}

          {/* "And More" card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <a
              href="https://wa.me/919633657120?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20booking%20a%20ride."
              className="relative bg-dark-bg/80 backdrop-blur-sm border-2 border-dashed border-white/10 rounded-2xl p-5 hover:border-neon-blue/40 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[180px] group"
            >
              <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center mb-3 group-hover:bg-neon-blue/20 transition-colors">
                <Plus size={24} className="text-neon-blue" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">And 50+ More</h3>
              <p className="text-gray-400 text-sm">Name your destination, we'll get you there</p>
            </a>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            Don't see your place? We cover <span className="text-white font-semibold">All India</span> — just ask.
          </p>
          <a
            href="https://wa.me/919633657120?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20booking%20a%20ride."
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(176,38,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            Plan Your Trip
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
