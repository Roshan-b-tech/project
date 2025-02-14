import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { SignUpModal } from './SignUpModal';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-r from-[#9f2bea] to-[#40f99b] rounded-xl flex items-center justify-center">
          <span className="text-2xl font-bold">M</span>
        </div>
        <span className="text-2xl font-bold">Melodio</span>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-2 bg-green-400/90 hover:bg-green-400 rounded-full text-gray-900 font-medium transition-colors"
      >
        Sign Up
      </button>

      <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

const Hero = () => {
  return (
    <section className="relative min-h-screen text-white pt-20 px-4 flex items-center justify-center">
      <div className="container mx-auto relative z-10">
        {/* Navbar */}
        <Header />

        {/* Hero Content */}
        <div className="text-center max-w-2xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-2xl mb-2">Our beta version app is now available for download.</h2>
            <p className="text-gray-400">Feel free to check it out and experience more features!</p>
          </motion.div>

          {/* App Store & Play Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-16"
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

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#c17bea] to-[#40f99b] bg-clip-text text-transparent"
          >
            Vibe Your Moment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 mb-12"
          >
            Endless stream of personalized music tailored to any scenario
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#9f2bea] to-[#40f99b] px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2 mx-auto"
          >
            <Wand2 className="w-5 h-5" />
            <span>Let's vibe</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
