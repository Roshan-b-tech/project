import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full bg-[#1a0b2e]/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Music className="w-8 h-8 text-[#9f2bea]" />
          <span className="text-xl font-bold bg-gradient-to-r from-[#9f2bea] to-[#40f99b] bg-clip-text text-transparent">
            Melodio
          </span>
        </Link>
        <nav>
          <button className="bg-gradient-to-r from-[#9f2bea] to-[#40f99b] px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
            Sign Out
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;