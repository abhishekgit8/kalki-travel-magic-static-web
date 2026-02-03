
import { motion } from 'framer-motion';
import { Music, Wind, Armchair, Shield } from 'lucide-react';

const features = [
  {
    icon: <Wind size={32} />,
    title: "Premium AC",
    description: "Centralized climate control for your ultimate comfort in any weather."
  },
  {
    icon: <Armchair size={32} />,
    title: "Luxury Seating",
    description: "Push-back recliner seats for 14 persons with ample legroom for a relaxing journey."
  },
  {
    icon: <Music size={32} />,
    title: "High-Fidelity Audio",
    description: "Immersive sound system with neon ambient lighting for the party vibe."
  },
  {
    icon: <Shield size={32} />,
    title: "Safe & Secure",
    description: "Experienced drivers and GPS tracking for a worry-free safe trip."
  },
  // {
  //   icon: <Wifi size={32} />,
  //   title: "Onboard Wi-Fi",
  //   description: "Stay connected on the go with our high-speed internet access."
  // },
  // {
  //   icon: <Coffee size={32} />,
  //   title: "Refreshments",
  //   description: "Complimentary water and snack support available upon request."
  // }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">Premium </span>
            <span className="text-neon-blue">Amenities</span>
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
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(0,204,255,0.1)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-dark-surface rounded-xl flex items-center justify-center mb-6 text-neon-blue group-hover:text-white group-hover:bg-neon-blue transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
