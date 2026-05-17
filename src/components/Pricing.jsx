import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for small fleets',
      price: isAnnual ? 299 : 35,
      period: '/month',
      vehicles: '1–10 vehicles',
      features: [
        'Live vehicle tracking',
        'Basic driver management',
        'Manual trip reports',
        'Email support',
        'Up to 1 user account',
      ],
      badge: null,
    },
    {
      name: 'Pro',
      description: 'Most popular choice',
      price: isAnnual ? 899 : 99,
      period: '/month',
      vehicles: '10–50 vehicles',
      features: [
        'Everything in Basic',
        'Automation workflow',
        'Advanced analytics',
        'Route optimization',
        'Fuel monitoring',
        'Maintenance alerts',
        'Up to 5 user accounts',
        'Priority support',
      ],
      badge: 'Most Popular',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      price: 'Custom',
      period: '',
      vehicles: 'Unlimited vehicles',
      features: [
        'Everything in Pro',
        'API integration',
        'Custom integrations',
        'Dedicated account manager',
        'Unlimited user accounts',
        'SLA guarantee',
        '24/7 phone support',
        'White-label options',
      ],
      badge: null,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-white dark:bg-gray-900">
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
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Pay only for what you use. Scale your fleet, scale your plan.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`font-semibold ${!isAnnual ? 'text-blue-600' : 'text-gray-600 dark:text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer transition-colors"
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 4 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
              />
            </motion.button>
            <span className={`font-semibold ${isAnnual ? 'text-blue-600' : 'text-gray-600 dark:text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ml-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold"
              >
                Save 30%
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 lg:gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={plan.popular ? { scale: 1 } : { scale: 1.02 }}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {plan.badge}
                  </span>
                </motion.div>
              )}

              {/* Content */}
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className={`mb-6 pb-6 border-b ${plan.popular ? 'border-blue-200 dark:border-blue-800' : 'border-gray-200 dark:border-gray-700'}`}>
                  <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    {plan.vehicles}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-grow mb-8">
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5"
                        >
                          <Check size={16} className="text-green-600 dark:text-green-400" />
                        </motion.div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-12 text-center"
        >
          <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white mb-4">
            Questions about pricing?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Schedule a Demo
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing;
