import './App.css'

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"; 
import { useRef } from "react";
 

import { Suspense } from 'react'
import { Environment } from '@react-three/drei'


import { useGLTF} from "@react-three/drei";


function Model(props: any) { 
  const { nodes, materials } = useGLTF('./src/assets/bugatti3d.glb') as any;

  return (
    <group {...props} dispose={null}>  
      <mesh  
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials.black_cable}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026_Cube020.geometry}
        material={materials.ENGINE}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027_Cube025.geometry}
        material={materials["silver_door_strip.004"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028_Cube030.geometry}
        material={materials["silver_door_strip.004"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029_Cube031.geometry}
        material={materials.breaks_}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials["GRILL.004"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials["tyre.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_2.geometry}
          material={materials["rim_silver.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_3.geometry}
          material={materials["rim_blue.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_4.geometry}
          material={materials["Nut.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_5.geometry}
          material={materials["brake_disk.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_6.geometry}
          material={materials["wheel_joint.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_7.geometry}
          material={materials["cALLIPERS.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_8.geometry}
          material={materials["silver_door_strip.004"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_1.geometry}
          material={materials["headlight_glass.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_2.geometry}
          material={materials["headlight_square.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043_Cube081.geometry}
        material={materials["GRILL.004"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials["GRILL.004"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_Cube063_1.geometry}
          material={materials["tyre.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_Cube063_2.geometry}
          material={materials["rim_silver.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_Cube063_3.geometry}
          material={materials["rim_blue.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_Cube063_4.geometry}
          material={materials["Nut.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_Cube063_5.geometry}
          material={materials["brake_disk.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_Cube063_6.geometry}
          material={materials["wheel_joint.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_Cube063_7.geometry}
          material={materials["cALLIPERS.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_Cube063_8.geometry}
          material={materials["silver_door_strip.004"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048_Cube080_1.geometry}
          material={materials["tyre.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048_Cube080_2.geometry}
          material={materials["rim_silver.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048_Cube080_3.geometry}
          material={materials["rim_blue.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048_Cube080_4.geometry}
          material={materials["Nut.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048_Cube080_5.geometry}
          material={materials["brake_disk.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048_Cube080_6.geometry}
          material={materials["wheel_joint.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048_Cube080_7.geometry}
          material={materials["cALLIPERS.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048_Cube080_8.geometry}
          material={materials["silver_door_strip.004"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_Cylinder025_1.geometry}
          material={materials["red.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_Cylinder025_2.geometry}
          material={materials["silver_door_strip.004"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033_Cylinder126_1.geometry}
          material={materials.aluminiumm}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033_Cylinder126_2.geometry}
          material={materials.glossy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033_Cylinder126_3.geometry}
          material={materials.white_holders}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder034_Cylinder131.geometry}
        material={materials.NAVY}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials.breaks_}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials.red_glass}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013_Plane014.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_Plane020_1.geometry}
          material={materials.red_glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_Plane020_2.geometry}
          material={materials.silver_trim}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials["silver_door_strip.004"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027_1.geometry}
          material={materials["reflective_coat.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027_2.geometry}
          material={materials["glass_front.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027_3.geometry}
          material={materials["Trim.004"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_1.geometry}
          material={materials["BLUE.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_2.geometry}
          material={materials["silver_door_strip.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_3.geometry}
          material={materials.NAVY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_4.geometry}
          material={materials["front_window.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_5.geometry}
          material={materials["black_fuel_tank.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_6.geometry}
          material={materials["black_strip.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_7.geometry}
          material={materials["WHEEL_CURB.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_8.geometry}
          material={materials["black_vent.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_9.geometry}
          material={materials.black_side_vent}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_10.geometry}
          material={materials.Mirrors}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_11.geometry}
          material={materials.exhaust}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_12.geometry}
          material={materials.black}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001_Text002.geometry}
        material={materials["WHITE.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002_Text001.geometry}
        material={materials["WHITE.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
} 

useGLTF.preload('./src/assets/bugatti3d.glb'); 



function ParticleCar(){
  const points = useRef<THREE.Points>(null!);
  const { nodes } = useGLTF('./src/assets/bugatti3d.glb') as any;
  
  return (
    <points ref={points}>
    <Model />
    <pointsMaterial color="#8541c4" size={0.025} sizeAttenuation />
  </points> 
  )
}

function App() {  
  return ( 
    <Canvas >
      <Suspense fallback={null}>
          <OrbitControls /> 
           
           <ParticleCar /> 
          
          <Environment preset="sunset" background />
        </Suspense>
    </Canvas>
  )
}

export default App
