import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MusicVisualizer from "./components/MusicVisualizer";
import DemoNotice from "./components/DemoNotice";
import SeeYourSound from "./components/SeeYourSound";
import PlayAndModify from "./components/PlayAndModify";
import RoyaltyFreeSection from "./components/RoyaltyFreeSection";
import InstantMusicSection from "./components/InstantMusicSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white">
        {/* ✅ Animated Background Covers Everything */}
        <AnimatedBackground />  

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* ✅ Wrapper to force background on all sections */}
                <div className="relative z-10 flex flex-col">
                  <Hero />  {/* This contains "Vibe Your Moment" */}
                  <Features />
                  <SeeYourSound />
                  <PlayAndModify />
                  <MusicVisualizer />
                  <DemoNotice />
                  <RoyaltyFreeSection />
                  <InstantMusicSection />
                </div>
                {/* ❌ Contact Section still has no animated background */}
                <ContactSection />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
