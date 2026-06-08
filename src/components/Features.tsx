import { motion } from 'framer-motion';
import { Music, Wind, Armchair, Shield, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: <Wind size={32} />,
    title: 'Premium AC',
    description: 'Centralized climate control for your ultimate comfort in any weather.',
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: <Armchair size={32} />,
    title: 'Luxury Seating',
    description: 'Push-back recliner seats for 14 persons with ample legroom for a relaxing journey.',
    gradient: 'from-purple-500 to-pink-600',
    glow: 'rgba(168,85,247,0.3)',
  },
  {
    icon: <Music size={32} />,
    title: 'High-Fidelity Audio',
    description: 'Immersive sound system with neon ambient lighting for the party vibe.',
    gradient: 'from-neon-red to-orange-600',
    glow: 'rgba(255,0,51,0.3)',
  },
  {
    icon: <Shield size={32} />,
    title: 'Safe & Secure',
    description: 'Experienced drivers and GPS tracking for a worry-free safe trip.',
    gradient: 'from-green-500 to-emerald-600',
    glow: 'rgba(34,197,94,0.3)',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Ambient Lighting',
    description: 'Dynamic neon mood lighting that transforms your journey into an experience.',
    gradient: 'from-yellow-500 to-amber-600',
    glow: 'rgba(234,179,8,0.3)',
  },
  {
    icon: <Zap size={32} />,
    title: 'Onboard Charging',
    description: 'USB charging ports at every seat to keep your devices powered up.',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.3)',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-blue text-sm uppercase tracking-[0.3em] mb-4 font-medium"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">Premium </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Amenities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We redefined travel with top-notch facilities ensuring every mile is a memory.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${feature.glow}, transparent)` }}
              />
              <div className="relative bg-dark-card/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
