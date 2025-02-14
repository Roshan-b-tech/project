import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const AnimatedBackground: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",  // Ensure it covers entire page
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,  // Keeps it behind everything
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars 
          radius={100}  
          depth={50}    
          count={5000}  
          factor={4}    
          saturation={0} 
          fade           
          speed={1}      
        />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
