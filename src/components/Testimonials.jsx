import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Fleet Manager',
      company: 'Golden Route Logistics',
      image: '👨‍💼',
      rating: 5,
      quote: 'FleetFlow transformed how we manage our 50+ vehicle fleet. We reduced fuel costs by 28% in just 3 months. The automation is incredible.',
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Director',
      company: 'FastHaul Transport',
      image: '👩‍💼',
      rating: 5,
      quote: 'Real-time tracking and automated alerts have made our operations so much smoother. Our drivers love the intuitive interface.',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Logistics Owner',
      company: 'Desert Freight Co.',
      image: '👨‍💼',
      rating: 5,
      quote: 'Best investment for our fleet. The ROI was immediate. Support team is responsive and helpful. Highly recommended!',
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
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
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
            Loved by Fleet <span className="gradient-text">Managers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about FleetFlow
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="testimonial-card group"
            >
              {/* Quote Icon */}
              <div className="text-4xl mb-4 opacity-30 group-hover:opacity-50 transition-opacity">
                "
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic text-sm">
                {testimonial.quote}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="border-t border-gray-200 dark:border-gray-700 pt-6"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-poppins font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
        >
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Trusted by leading transport companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['ISO Certified', '99.9% Uptime', 'SOC 2 Compliant', '24/7 Support'].map(
              (badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="py-3 px-4 bg-white dark:bg-gray-700 rounded-lg"
                >
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {badge}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
