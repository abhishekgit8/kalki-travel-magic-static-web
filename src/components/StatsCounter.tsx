import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Star, Users, Clock } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = '', duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const stats = [
  {
    icon: <MapPin size={24} />,
    value: 50,
    suffix: '+',
    label: 'Destinations',
    color: 'from-neon-red to-neon-purple',
  },
  {
    icon: <Users size={24} />,
    value: 200,
    suffix: '+',
    label: 'Happy Trips',
    color: 'from-neon-blue to-neon-purple',
  },
  {
    icon: <Star size={24} />,
    value: 49,
    suffix: '/5',
    label: 'Customer Rating',
    color: 'from-neon-gold to-neon-red',
    displayValue: 4.9,
  },
  {
    icon: <Clock size={24} />,
    value: 5,
    suffix: '+',
    label: 'Years Experience',
    color: 'from-neon-purple to-neon-blue',
  },
];

const StatsCounter = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-red/5 via-neon-purple/5 to-neon-blue/5 animate-gradient-x" />

      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-neon-red/10 rounded-full blur-[60px] animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-[60px] animate-float-delayed" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm"
                style={{ background: `linear-gradient(135deg, ${stat.color.includes('red') ? '#ff0033' : '#00ccff'}, ${stat.color.includes('purple') ? '#b026ff' : '#ffd700'})` }}
              />
              <div className="relative bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:border-white/20 transition-all duration-300">
                <div className={`w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                  {stat.icon}
                </div>
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2 font-display">
                  {stat.displayValue ? (
                    <Counter end={stat.displayValue} suffix={stat.suffix} />
                  ) : (
                    <Counter end={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
