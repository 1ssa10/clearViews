"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Experience = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Experience;
