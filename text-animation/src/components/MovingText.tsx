import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const MovingText = ({ position }: { position: [number, number, number] }) => {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (textRef.current) {
      textRef.current.position.x += 0.065;

      if (textRef.current.position.x > window.innerWidth / 100) {
        textRef.current.position.x = -window.innerWidth / 100;
      }
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={1.5}
      color="red"
      position={[position[0], position[1], position[2]]} // Use dynamic position
      anchorX="center"
      anchorY="middle"
    >
      -----------------------------------------------------------------------------------------------------------------------------------------------------------------
    </Text>
  );
};

export default MovingText;
