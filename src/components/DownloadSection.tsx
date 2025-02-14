import React from 'react';
import { motion } from 'framer-motion';

const DownloadSection = () => {
  return (
    <section className="py-16 px-4 bg-[#2a1b3e]">
      <div className="container mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Vibe Your Moment
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Endless stream of personalized music tailored to any scenario
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <button className="bg-black px-6 py-3 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" className="w-6 h-6" />
            <span>App Store</span>
          </button>
          <button className="bg-black px-6 py-3 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-6 h-6" />
            <span>Google Play</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default DownloadSection;