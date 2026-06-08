import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Menon',
    role: 'Family Vacation',
    rating: 5,
    text: 'Absolutely incredible experience! The Force Traveller was spotless, AC was powerful, and the driver was very professional. Our Kerala family trip became truly memorable.',
    avatar: 'AM',
  },
  {
    name: 'Priya Sharma',
    role: 'Corporate Trip',
    rating: 5,
    text: 'Booked for our team outing. The sound system and ambient lighting created an amazing party atmosphere on the road. Highly recommend Kalki Travel Magic!',
    avatar: 'PS',
  },
  {
    name: 'Rahul Krishnan',
    role: 'Wedding Transport',
    rating: 5,
    text: 'Used their service for wedding guest transport. Punctual, clean, and the pushback seats made the long journey so comfortable. Will book again!',
    avatar: 'RK',
  },
  {
    name: 'Meera Nair',
    role: 'Pilgrimage Tour',
    rating: 5,
    text: 'We traveled to multiple temples across Kerala. The driver knew all the routes perfectly. The luxury seating made our 3-day trip very comfortable.',
    avatar: 'MN',
  },
  {
    name: 'Vishnu Prasad',
    role: 'College Trip',
    rating: 5,
    text: 'Best travel experience ever! The neon lighting and music system made our college trip unforgettable. The 14-seater was perfect for our group.',
    avatar: 'VP',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-gold text-sm uppercase tracking-[0.3em] mb-4 font-medium"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">What Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-gold to-neon-red">Travelers Say</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-6 -left-4 text-neon-purple/20">
              <Quote size={80} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 relative"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-neon-gold fill-neon-gold" />
                  ))}
                </div>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-red to-neon-purple flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{testimonials[current].name}</p>
                    <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current ? 'w-8 bg-neon-blue' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
