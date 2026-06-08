import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, MapPinned } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle size={32} />,
    step: '01',
    title: 'Send a Message',
    description: 'Reach out via WhatsApp with your travel dates and destination. We respond instantly.',
    color: 'from-neon-red to-neon-purple',
    glow: 'rgba(255,0,51,0.3)',
  },
  {
    icon: <CalendarCheck size={32} />,
    step: '02',
    title: 'Confirm Booking',
    description: 'Get a customized itinerary and pricing. Confirm your booking with a simple advance.',
    color: 'from-neon-blue to-neon-purple',
    glow: 'rgba(0,204,255,0.3)',
  },
  {
    icon: <MapPinned size={32} />,
    step: '03',
    title: 'Enjoy the Ride',
    description: 'Sit back in luxury as our expert driver takes you to your dream destination.',
    color: 'from-neon-purple to-neon-gold',
    glow: 'rgba(176,38,255,0.3)',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-blue text-sm uppercase tracking-[0.3em] mb-4 font-medium"
          >
            Simple Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">How It </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Works</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-neon-red/50 via-neon-purple/50 to-neon-blue/50" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 text-center hover:border-white/10 transition-all duration-500 hover:shadow-2xl"
                style={{ boxShadow: `0 0 0 rgba(0,0,0,0)` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px -10px ${step.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                }}
              >
                {/* Step number */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mt-6 mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
