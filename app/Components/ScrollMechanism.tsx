import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export const ScrollMechanism = () => {
  const scrolling = useScroll();
  const { camera } = useThree();
  const ref = useRef<number>();
  let direction: number = -1;
  useFrame(() => {
    // scrolling up or down
    if (ref.current == null) {
      ref.current = scrolling.offset;
    } else {
      //changing direction based on scroll offset && previous scroll offset
      scrolling.offset > ref.current ? (direction = -1) : (direction = 1);
      ref.current = scrolling.offset;
    }
    // camera position
    camera.position.y += scrolling.delta * direction * 10;
  });

  return null;
};
