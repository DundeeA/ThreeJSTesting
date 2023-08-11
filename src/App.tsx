import './App.css'

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"; 
import { useMemo, useRef } from "react";

const BasicParticles = () => {
  // This reference gives us direct access to our points
  const points = useRef<THREE.Points>(null!);
 
  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <sphereGeometry args={[1, 48, 40]} />
      <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
    </points> 
  ); 
};

function App() {  
  return ( 
    <Canvas camera={{ position: [0.6, 2, 0.6] }}>
    <ambientLight intensity={0.5} />
    <BasicParticles />
    <OrbitControls autoRotate />
    </Canvas>
  )
}

export default App
