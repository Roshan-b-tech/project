import React from 'react';
import { motion } from 'framer-motion';

const InstantMusicSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80"
            alt="Music creation"
            className="rounded-lg shadow-xl mb-8 w-full"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Instant Music Creation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Create full tracks in just seconds. Our AI engine quickly generates high-quality music, allowing you to produce more in less time.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-[#9f2bea] to-[#40f99b] px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2 mx-auto"
          >
            <span>Download APP</span>
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default InstantMusicSection;
