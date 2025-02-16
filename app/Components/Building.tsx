import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/building.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={(nodes.Plane005 as THREE.Mesh).geometry}
          material={materials.windows}
        />
        <mesh
          geometry={(nodes.Plane005_1 as THREE.Mesh).geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={(nodes.Plane005_2 as THREE.Mesh).geometry}
          material={materials["Material.010"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/building.glb");
