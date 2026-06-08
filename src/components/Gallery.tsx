import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, RotateCw, Eye } from 'lucide-react';
import InteriorViewer from './InteriorViewer';

const Gallery = () => {
  const images = [
    '/Media (2).jpeg',
    '/Media (3).jpeg',
    '/Media (4).jpeg',
    '/Media (5).jpeg',
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [interiorOpen, setInteriorOpen] = useState(false);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };
  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="gallery" className="py-24 bg-dark-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-red/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-red text-sm uppercase tracking-[0.3em] mb-4 font-medium"
          >
            Our Fleet
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-purple">Fleet</span>
          </motion.h2>

          {/* 360° View CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setInteriorOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-bg border border-white/10 hover:border-neon-blue/50 rounded-full text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,204,255,0.2)] mt-4"
          >
            <RotateCw size={16} className="text-neon-blue" />
            Explore Interior 360°
            <Eye size={16} className="text-gray-400" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(index)}
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-white/5"
            >
              {/* Skeleton loader */}
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-dark-surface animate-pulse" />
              )}

              {/* Glow border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-full h-full">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  onLoad={() => handleImageLoad(index)}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    loadedImages[index] ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold text-base md:text-lg">Kalki Moment #{index + 1}</p>
                  <p className="text-gray-300 text-xs md:text-sm">Click to view</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white transition-colors z-10 p-2"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 md:left-6 text-white/70 hover:text-white transition-colors z-10 p-2"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src={images[selectedIndex]}
              alt={`Gallery ${selectedIndex + 1}`}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 md:right-6 text-white/70 hover:text-white transition-colors z-10 p-2"
            >
              <ChevronRight size={36} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(index); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? 'w-8 bg-neon-blue' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interior Viewer */}
      <InteriorViewer isOpen={interiorOpen} onClose={() => setInteriorOpen(false)} />
    </section>
  );
};

export default Gallery;
