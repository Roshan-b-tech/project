import React  from 'react';
import { X } from 'lucide-react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900/95 w-full max-w-md mx-4 rounded-3xl overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-green-300 text-transparent bg-clip-text">
              Vibe Your<br />Moment
            </h2>
            <div className="space-y-2">
              <p className="text-white text-xl font-light">
                Endless stream of personalized music
              </p>
              <p className="text-white text-xl font-light">
                tailored to any scenario
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              className="w-full py-3 px-4 bg-white rounded-full text-gray-900 font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <img 
                src="https://www.google.com/favicon.ico" 
                alt="Google" 
                className="w-5 h-5"
              />
              Continue with Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}