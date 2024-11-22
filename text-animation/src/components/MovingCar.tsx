import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MovingCar = ({ position }: { position: [number, number, number] }) => {
  const carRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (carRef.current) {
      carRef.current.position.x += 0.065;

      // Reset the position when it moves out of view
      if (carRef.current.position.x > window.innerWidth / 100) {
        carRef.current.position.x = -window.innerWidth / 100;
      }
    }
  });

  return (
    <group ref={carRef} position={position}>
      {/* Car Body */}
      <mesh>
        <boxGeometry args={[3, 1.5, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[2, 0.6, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Front Headlights */}
      <mesh position={[1.6, -0.2, 0.4]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
      <mesh position={[1.6, -0.2, -0.4]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="yellow" />
      </mesh>

      {/* Wheels */}
      <mesh position={[-1, -0.8, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[1, -0.8, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-1, -0.8, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[1, -0.8, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
};

export default MovingCar;
