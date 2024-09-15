import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import './Model2.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

// Model2 Component
function Model2(props) {
    const modelRef = useRef();
  const { nodes, materials } = useGLTF('/stylized_dumbell.glb');

  // Leva controls for manual position/rotation (if needed)
//   const { scenePosition, sceneRotation } = useControls({
//     scenePosition: { value: { x: 0, y: -0.7, z: 0 }, step: 0.1 },
//     sceneRotation: { value: { x: 0.03, y: -0.78, z: -0.28 }, step: 0.01 },
//   });
  const {camera, scene} = useThree();

  useLayoutEffect(() => {
   
      const tl = gsap.timeline();
      gsap.to(modelRef.current.rotation, {
        y: Math.PI * 3,
        scrollTrigger: {
          trigger: ".main-content",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

    }, []);
    // Set plate and black material colors
  useEffect(() => {
    materials?.Plates?.color.set('#1D862E');
    materials?.Black?.color.set('#06402B');
    materials?.Grip?.color.set('grey');
  }, [materials]);


  return (
    <group ref={modelRef} {...props} dispose={null}>
      <group
        position={[0, -0.7, 0]}
        rotation={[0.03, -0.78, -0.28]}
      >
        <group scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={700}>
            <mesh geometry={nodes.Dumbell_Grip_0.geometry} material={materials.Grip} />
            <mesh geometry={nodes.Dumbell_Plates_0.geometry} material={materials.Plates} />
            <mesh geometry={nodes.Dumbell_Black_0.geometry} material={materials.Black} />
            <mesh geometry={nodes.Dumbell_Gear_0.geometry} material={materials.Gear} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/stylized_dumbell.glb');

// Scene Component
function Scene2() {
  return (
    <Canvas className="canvas-container-model2" camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model2 />
      <Environment preset='sunset' />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Scene2;
