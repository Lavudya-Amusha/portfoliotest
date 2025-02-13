import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-blue-400 text-white text-center">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm [Your Name]
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A Passionate Developer
      </motion.p>
    </section>
  );
}

export default Hero;

