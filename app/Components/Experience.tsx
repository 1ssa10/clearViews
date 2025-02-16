"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
// import { OrbitControls } from "@react-three/drei";

import { Environment, ScrollControls } from "@react-three/drei";
import InstanceBuilding from "./InstanceBuilding";
import { ScrollMechanism } from "./ScrollMechanism";

const Experience = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 5], rotation: [0, 0.5, 0] }}>
        <ScrollControls pages={10} damping={0.1}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <InstanceBuilding />
          <ScrollMechanism />
          <Environment files="/kloofendal_48d_partly_cloudy_puresky_1k.hdr" />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Experience;
