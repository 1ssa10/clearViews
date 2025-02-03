"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
// import { OrbitControls } from "@react-three/drei";

import { Environment } from "@react-three/drei";
import InstanceBuilding from "./InstanceBuilding";
// import Building from "./Building";

const Experience = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 5], rotation: [0, 0.5, 0] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <InstanceBuilding />
        <Environment files="/kloofendal_48d_partly_cloudy_puresky_1k.hdr" />
      </Canvas>
    </div>
  );
};

export default Experience;
