import React, { useMemo } from "react";
import { Merged, useGLTF } from "@react-three/drei";
import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
import { Model } from "./3dmodels/Building";

const InstanceBuilding = () => {
  const { nodes } = useGLTF("./building.glb");

  const meshes = useMemo(
    () => ({
      Plane005: nodes.Plane005,
      Plane005_1: nodes.Plane005_1,
      Plane005_2: nodes.Plane005_2,
    }),
    [nodes]
  );

  return (
    <Merged meshes={meshes}>
      {(models: React.Ref<THREE.Group<THREE.Object3DEventMap>> | undefined) =>
        Array.from({ length: 10 }).map((_, i) => (
          <Model key={i} ref={models} position={[0, i * -1.546, 0]} />
        ))
      }
    </Merged>
  );
};

export default InstanceBuilding;
