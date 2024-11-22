import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";

const AvtCanvas = ({ children }: React.PropsWithChildren) => (
  <Canvas
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
    }}
  >
    {/* Add lighting */}
    <ambientLight intensity={0.5} color={"red"} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <OrbitControls />
    {children}
  </Canvas>
);

export default AvtCanvas;
