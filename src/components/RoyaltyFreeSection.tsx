import React from 'react';
import { motion } from 'framer-motion';

const RoyaltyFreeSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80"
              alt="Street musician"
              className="rounded-lg shadow-xl transform -rotate-6"
            />
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
              alt="People enjoying music"
              className="rounded-lg shadow-xl transform rotate-6 mt-8"
            />
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Royalty-Free Creations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          We are working on a feature to provide you with copyright-free music creation.
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
      </div>
    </section>
  );
}

export default RoyaltyFreeSection;