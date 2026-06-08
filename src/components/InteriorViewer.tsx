import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCw, X } from 'lucide-react';

const interiorImages = [
  '/Media (2).jpeg',
  '/Media (3).jpeg',
  '/Media (4).jpeg',
  '/Media (5).jpeg',
];

interface InteriorViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const InteriorViewer = ({ isOpen, onClose }: InteriorViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % interiorImages.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 80) {
      if (diff > 0) next();
      else prev();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
          onClick={onClose}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 px-6 py-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <RotateCw size={20} className="text-neon-blue animate-spin" style={{ animationDuration: '3s' }} />
              <div>
                <h3 className="text-white font-bold">Interior 360° View</h3>
                <p className="text-gray-400 text-xs">Drag or swipe to explore</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl px-4 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={interiorImages[currentIndex]}
              alt={`Interior view ${currentIndex + 1}`}
              className="w-full h-[50vh] md:h-[65vh] object-cover rounded-2xl select-none"
              draggable={false}
            />

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          {/* Dots + counter */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-gray-400 text-sm">
              {currentIndex + 1} / {interiorImages.length}
            </span>
            <div className="flex gap-2">
              {interiorImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-neon-blue' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-2 px-4">
            {interiorImages.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                  i === currentIndex ? 'border-neon-blue scale-105' : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteriorViewer;
