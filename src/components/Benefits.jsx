import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, Zap } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Reduce Fuel Costs',
      description: 'AI-powered route optimization and real-time fuel monitoring can reduce fuel expenses by up to 30%',
      metric: '30%',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate manual tasks and free up your team to focus on strategic growth and operations',
      metric: '15 hrs',
      color: 'from-blue-500 to-blue-600',
      subtitle: 'per week',
    },
    {
      icon: Target,
      title: 'Increase Efficiency',
      description: 'Get real-time visibility into fleet operations and make data-driven decisions instantly',
      metric: '40%',
      color: 'from-purple-500 to-purple-600',
      subtitle: 'avg. improvement',
    },
    {
      icon: Zap,
      title: 'Better Decision Making',
      description: 'Advanced analytics and reporting provide actionable insights for fleet optimization',
      metric: '24/7',
      color: 'from-orange-500 to-orange-600',
      subtitle: 'monitoring',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Real Business <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Companies using FleetFlow report significant improvements in efficiency and cost savings
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ y: -8, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full group-hover:opacity-20 transition-opacity`}></div>

                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-6 shadow-lg relative z-10`}
                  >
                    <IconComponent size={32} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Metric */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className={`inline-block text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2`}
                    >
                      {benefit.metric}
                    </motion.div>
                    {benefit.subtitle && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {benefit.subtitle}
                      </p>
                    )}

                    {/* Title */}
                    <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.color}`}
                  ></motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white overflow-hidden relative"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-20 -mb-20"></div>

          <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Active Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">500K+</div>
              <div className="text-lg opacity-90">Vehicles Tracked</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-lg opacity-90">Fuel Saved</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
