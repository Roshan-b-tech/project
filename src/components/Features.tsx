import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Music, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Wand2 className="w-8 h-8 text-[#9f2bea]" />,
      title: "AI-Powered Music Generation",
      description: "Create unique soundtracks tailored to your mood and moment."
    },
    {
      icon: <Music className="w-8 h-8 text-[#9f2bea]" />,
      title: "Real-time Visualization",
      description: "Watch your music transform into stunning visual displays."
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#9f2bea]" />,
      title: "Personalized Experience",
      description: "Adapt the sound to your preferences and environment."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a0b2e] p-6 rounded-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
