import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Model } from "./3dmodels/Poly";
const Worker = () => {
  const workerRef = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF("/worker.glb");

  const { camera } = useThree();
  const chaieRef = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, workerRef);

  // Play the animation on mount
  useEffect(() => {
    if (workerRef.current && actions["sit-Pose"]) {
      actions["sit-Pose"].play();
    }
  }, [actions]);

  useFrame((state, delta) => {
    if (chaieRef.current && workerRef.current) {
      chaieRef.current.position.y = THREE.MathUtils.damp(
        chaieRef.current.position.y,
        camera.position.y - 0.5,
        3,
        delta
      );
    }
  });
  return (
    <>
      <group position={[0, 0, 1]} ref={chaieRef}>
        <Model position={[0, 0, 0]} />
        <primitive
          ref={workerRef}
          object={scene}
          position={[0, -0.7, 0]}
          scale={1}
          rotation={[0, Math.PI, 0]}
        />
      </group>
    </>
  );
};

export default Worker;
