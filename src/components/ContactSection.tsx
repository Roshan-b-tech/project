import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="py-16 px-4 bg-black text-white text-center">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold mb-4"
        >
          Contact us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 mb-6"
        >
          play@melodio.ai
        </motion.p>
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a href="#" className="text-2xl text-gray-400 hover:text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <FaDiscord />
          </motion.a>
          <motion.a href="#" className="text-2xl text-gray-400 hover:text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <FaTwitter />
          </motion.a>
          <motion.a href="#" className="text-2xl text-gray-400 hover:text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <FaYoutube />
          </motion.a>
        </div>
        <div className="flex justify-center space-x-8 text-gray-400 text-sm">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
