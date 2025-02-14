import React from 'react';
import { Play, Music, Wand2 } from 'lucide-react';

const MusicVisualizer = () => {
  return (
    <section className="py-12 px-4 flex justify-center">
      <div className="w-full max-w-lg bg-[#2a1b3e] p-6 rounded-2xl border border-[#4c2a67] shadow-lg text-white">
        <p className="text-center text-lg leading-relaxed text-gray-300">
          With AI magic, we create your sound, <br />
          Unlimited music, wherever you’re bound.
        </p>

        <p className="mt-4 text-center text-gray-300">
          Oh, Melodio, we’re here to redefine, <br />
          Your music world, every beat, every rhyme.
        </p>

        <p className="mt-4 text-center text-gray-300">
          From gaming to workouts, or chillin’ out at night,
        </p>

        <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between bg-gray-800/80 rounded-lg p-3 mb-4">
            <Play className="w-6 h-6 text-white cursor-pointer hover:text-green-400 transition-colors" />
            <div className="flex-1 mx-4">
              <div className="flex space-x-1">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-blue-400/80"
                    style={{
                      height: `${Math.random() * 24 + 4}px`,
                    }}
                  />
                ))}
              </div>
            </div>
            <Music className="w-6 h-6 text-green-400" />
          </div>

          <h2 className="mt-6 text-lg text-gray-300 text-center">
            Describe the melody you need for your moment
          </h2>

          <div className="mt-4">
            <textarea
              className="w-full bg-[#1a0b2e] text-white p-4 rounded-lg resize-none h-24 border border-[#4c2a67] focus:outline-none focus:ring-2 focus:ring-[#9f2bea]"
              placeholder="Feeling intrigued while exploring a new city..."
            />
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-gray-400 text-sm">0/500</span>
            <button className="flex items-center gap-2 bg-[#b5ff70] text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
              <Wand2 className="w-4 h-4" />
              <span>Let's vibe</span>
            </button>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default MusicVisualizer;
