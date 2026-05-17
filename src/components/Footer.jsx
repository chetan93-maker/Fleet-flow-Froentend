import React from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Security', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Docs', href: '#' },
      { name: 'Support Center', href: '#' },
      { name: 'Community', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Sitemap', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-poppins font-bold text-xl text-gray-900 dark:text-white">
                FleetFlow
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Modern vehicle management system for transport companies.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-400 hover:text-white transition-all flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links Grid */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="font-poppins font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-12"
        ></motion.div>

        {/* Bottom Footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left - Copyright & Links */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              © {currentYear} FleetFlow. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400 justify-center md:justify-start flex-wrap">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                Terms
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                Cookies
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6 justify-center md:justify-end"
          >
            <motion.a
              href="mailto:hello@fleetflow.com"
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <Mail size={16} />
              hello@fleetflow.com
            </motion.a>
            <motion.a
              href="tel:+15551234567"
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <Phone size={16} />
              +1 (555) 123-4567
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
            Made with ❤️ by the FleetFlow team
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-400">
              🔒 Enterprise Security
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-400">
              ⚡ 99.9% Uptime
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-400">
              🌍 Global Support
            </span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
