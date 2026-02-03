
import { motion } from 'framer-motion';


const Gallery = () => {
  const images = [
    '/Media (2).jpeg',
    '/Media (3).jpeg',
    '/Media (4).jpeg',
    '/Media (5).jpeg',
  ];

  return (
    <section id="gallery" className="py-20 bg-dark-card border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">Our </span>
            <span className="text-neon-red">Fleet</span>
          </motion.h2>
          {/* <p className="text-gray-400">Visuals from our premium travel diaries.</p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-lg border border-white/5"
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                {/* <p className="text-white font-bold">Kalki Moment #{index + 1}</p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
