import React from 'react';
import { motion } from 'framer-motion';

const PlayAndModify = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="relative mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&q=80"
              alt="Person listening music"
              className="rounded-lg shadow-xl transform -rotate-6"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
              alt="Music production"
              className="rounded-lg shadow-xl transform translate-y-8"
            />
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&q=80"
              alt="Person with headphones"
              className="rounded-lg shadow-xl transform rotate-6"
            />
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Play and Modify On The Go
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Seamlessly adapts to any command, ensuring your music perfectly reflects your present state.
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

export default PlayAndModify;
