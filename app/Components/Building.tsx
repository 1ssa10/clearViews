import { useGLTF } from "@react-three/drei";
import React from "react";

const Building = () => {
  const building = useGLTF("./building.glb");
  console.log(building);
  return (
    <>
      <primitive object={building.scene} />
    </>
  );
};

export default Building;
