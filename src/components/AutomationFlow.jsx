import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AutomationFlow = () => {
  const steps = [
    {
      number: '1',
      title: 'Vehicle Assigned',
      description: 'Fleet manager assigns vehicle and trip to driver',
      icon: '🚚',
    },
    {
      number: '2',
      title: 'Trip Created',
      description: 'System generates optimized route and schedule',
      icon: '📋',
    },
    {
      number: '3',
      title: 'Driver Notified',
      description: 'Push notification with trip details sent automatically',
      icon: '📲',
    },
    {
      number: '4',
      title: 'Live Tracking',
      description: 'Real-time GPS tracking starts immediately',
      icon: '📍',
    },
    {
      number: '5',
      title: 'Monitoring',
      description: 'System monitors fuel consumption and route adherence',
      icon: '📊',
    },
    {
      number: '6',
      title: 'Auto Alerts',
      description: 'Instant alerts for delays, fuel, or vehicle issues',
      icon: '⚠️',
    },
    {
      number: '7',
      title: 'Trip Completed',
      description: 'Automatic log entry with complete trip data',
      icon: '✅',
    },
    {
      number: '8',
      title: 'Invoice Generated',
      description: 'Billing automatically processed and recorded',
      icon: '💰',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="automation" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
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
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Automation <span className="gradient-text">Workflow</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how FleetFlow automates your entire vehicle management process
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Step Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-400 h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>

                {/* Arrow Indicator */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight
                        size={24}
                        className="text-blue-500 dark:text-blue-400"
                      />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vertical Timeline for Mobile */}
        <motion.div
          className="lg:hidden mt-12 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-600"></div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-24 pt-2"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 top-2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 flex items-center justify-center text-2xl shadow-lg">
                  {step.icon}
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
                  <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Result Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="font-poppins font-bold text-2xl mb-3">
            ✨ Zero Manual Intervention Required
          </h3>
          <p className="text-lg opacity-90">
            From trip assignment to invoice generation, everything happens automatically. Your team focuses on growth, not paperwork.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AutomationFlow;
