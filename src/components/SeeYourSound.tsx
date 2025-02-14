import React from 'react';
import { motion } from 'framer-motion';

const SeeYourSound = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Image Container */}
        <div className="relative mb-12 flex flex-col items-center md:flex-row md:justify-center md:space-x-6">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80"
            alt="DJ mixing"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-2xl object-cover aspect-video mb-4 md:mb-0"
          />
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
            alt="Music visualization"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-2xl object-cover aspect-video md:mt-12"
          />
        </div>

        {/* Text Content */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          See Your Sound
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Enhance your auditory experience with dynamic music visualizations. Watch as your music comes to life with stunning graphics that move to the beat.
        </motion.p>

        {/* Download Button */}
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

export default SeeYourSound;
