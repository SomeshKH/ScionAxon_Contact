import { motion } from 'motion/react';
import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react';

export function HeroSection() {
  const floatingCards = [
    { icon: Globe, text: '150+ Countries', color: 'from-purple-500 to-blue-500', delay: 0 },
    { icon: Users, text: '10K+ Companies', color: 'from-blue-500 to-cyan-500', delay: 0.2 },
    { icon: TrendingUp, text: '$2B+ Trade Volume', color: 'from-cyan-500 to-green-500', delay: 0.4 },
  ];

  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-sm backdrop-blur-sm">
              🌍 Global Trade Made Simple
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Discover Global{' '}
            <span className="gradient-text">Exporters</span>
            <br />& Markets
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Connect with verified exporters worldwide. Explore opportunities, build partnerships, and grow your business in the global marketplace.
          </motion.p>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('companies-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 
                     hover:shadow-[0_0_40px_rgba(127,90,240,0.6)] transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3 text-lg font-semibold">
              Explore Companies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Floating Stats Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {floatingCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + card.delay }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-card rounded-2xl p-6 min-w-[200px] relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{card.text.split(' ')[0]}</p>
                  <p className="text-sm text-gray-400">{card.text.split(' ').slice(1).join(' ')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
