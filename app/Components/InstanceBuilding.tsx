import React from "react";
import { Instance, Instances, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const InstanceBuilding = () => {
  const { nodes, materials } = useGLTF("./building.glb");

  const MeshNodes: THREE.Mesh[] = [];
  const mats: THREE.Material[] = [];
  Object.keys(nodes).forEach((key) => {
    if (nodes[key] instanceof THREE.Mesh) {
      MeshNodes.push(nodes[key]);
    }
  });
  Object.keys(materials).forEach((key) => {
    mats.push(materials[key]);
  });

  return (
    <group>
      {MeshNodes.map((mesh, i) => (
        <Instances
          key={i}
          limit={10}
          range={10}
          geometry={mesh.geometry}
          material={mats[i]}
        >
          {/* Create 10 instances */}
          {Array.from({ length: 10 }).map((_, i) => (
            <Instance
              key={i}
              position={[0, i * 1.546, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          ))}
        </Instances>
      ))}
    </group>
  );
};

export default InstanceBuilding;
