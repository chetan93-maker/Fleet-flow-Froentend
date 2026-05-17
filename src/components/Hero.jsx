import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-transparent to-blue-50 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-20 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.h1
              variants={itemVariants}
              className="font-poppins font-bold text-5xl md:text-6xl leading-tight text-gray-900 dark:text-white mb-6"
            >
              Manage Your Entire{' '}
              <span className="gradient-text">Fleet in One Dashboard</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              Track, optimize, and automate your transport business. Reduce manual work, increase efficiency, and gain real-time visibility into every vehicle.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Start Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary group"
              >
                Book Demo
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                </div>
                <span>Free for 14 days</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                </div>
                <span>Setup takes 5 minutes</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 space-y-4">
                {/* Dashboard Mockup */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-500 rounded-lg p-4 text-white text-sm font-semibold">
                    <div className="text-2xl mb-1">🚚</div>
                    Active Vehicles
                    <div className="text-2xl font-bold mt-2">48</div>
                  </div>
                  <div className="bg-green-500 rounded-lg p-4 text-white text-sm font-semibold">
                    <div className="text-2xl mb-1">📊</div>
                    Efficiency
                    <div className="text-2xl font-bold mt-2">92%</div>
                  </div>
                  <div className="bg-purple-500 rounded-lg p-4 text-white text-sm font-semibold">
                    <div className="text-2xl mb-1">⛽</div>
                    Fuel Saved
                    <div className="text-2xl font-bold mt-2">1.2K L</div>
                  </div>
                  <div className="bg-orange-500 rounded-lg p-4 text-white text-sm font-semibold">
                    <div className="text-2xl mb-1">📍</div>
                    Trips Today
                    <div className="text-2xl font-bold mt-2">156</div>
                  </div>
                </div>

                {/* Mini Map */}
                <div className="bg-gray-700 rounded-lg p-4 h-32 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-3xl mb-2">🗺️</div>
                    <div className="text-xs">Real-time Map Tracking</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 w-48"
            >
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Vehicle 001</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Status: <span className="text-green-600 dark:text-green-400 font-semibold">On Trip</span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                📍 45.23 km | ⛽ 67% fuel
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
