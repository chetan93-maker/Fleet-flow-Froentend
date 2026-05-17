import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Users,
  Map,
  Fuel,
  Wrench,
  BarChart3,
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Live Vehicle Tracking',
      description: 'Real-time GPS tracking of all vehicles on interactive maps with location history',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Driver Management',
      description: 'Manage driver profiles, performance metrics, and communication in one place',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Map,
      title: 'Route Optimization',
      description: 'AI-powered route planning to reduce fuel costs and delivery times',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Fuel,
      title: 'Fuel Monitoring',
      description: 'Track fuel consumption, detect anomalies, and reduce wastage',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Wrench,
      title: 'Maintenance Alerts',
      description: 'Automated maintenance scheduling and preventive service notifications',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive reports and insights to make data-driven decisions',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="features" className="py-20 px-4 bg-white dark:bg-gray-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern <span className="gradient-text">Fleet Management</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage, track, and optimize your fleet operations
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className="feature-card p-8"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-white shadow-lg`}
                >
                  <IconComponent size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6`}
                ></motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
