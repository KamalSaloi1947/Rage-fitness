import React, { useRef, useEffect, Suspense, useLayoutEffect, useState, useCallback } from 'react';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import * as THREE from 'three';
import './Model.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Model(props) {
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/stylized_dumbell.glb');
  const { scene, camera } = useThree(); // Get the camera and scene

   // Adjust roughness and metalness to increase sharpness
   useEffect(() => {
    if (materials?.Plates) {
      materials.Plates.roughness = 0.5; // Increase or decrease for more/less roughness
      // materials.Plates.metalness = 0.8; // Adjust for more metallic or matte finish
    }
    if (materials?.Black) {
      materials.Black.roughness = 0.4;
      // materials.Black.metalness = 0.6;
    }
    if (materials?.Grip) {
      materials.Grip.roughness = 0.4  ;
      // materials.Grip.metalness = 0.2;
    }
  }, [materials]);

  //  plate and black material colors
  useEffect(() => {
    materials?.Plates?.color.set('#1D862E');
    materials?.Black?.color.set('#06402B');
    materials?.Grip?.color.set('grey');
  }, [materials]);

  
  // GSAP animation for scroll-triggered movement, rotation, and camera movement
  useLayoutEffect(() => {
    if(window.innerWidth>768 ){
      const tl = gsap.timeline();
      new ScrollTrigger({});
      // component About.tsx
      tl.to(camera.position, {
        x: 2.924203,
        y: 0.73,
        z: 3.5,
        scrollTrigger: {
          trigger: ".Reason-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 3.01,
        y: 0.76,
        z: 3.7,
        scrollTrigger: {
          trigger: ".Reason-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      
      .to(scene.rotation, {
        x: -0.53,
        y: -3.48, 
        z: -0.21,
        scrollTrigger: {
          trigger: ".Reason-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      
      // component - BuyNow.tsx
      .to(camera.position, {
        x: 6,
        y: 3,
        z: 5.8,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 10,
        y: 0.3,
        z: -1,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })  
      .to(scene.rotation, {
        x: 6.5,
        y: -3.7,
          z: 0,
          scrollTrigger: {
            trigger: ".about",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
    }
    else {
      // On mobile devices, position the model in the center
      scene.position.set(0, 0, 0);
      scene.rotation.set(0, 0, 0);
      camera.position.set(0, 0, 5); // Adjust camera position as needed for mobile
    }
  }, [scene, camera]);
    
    // // Leva controls for manual position/rotation (if needed)
    // const { scenePosition, sceneRotation } = useControls({
    //   scenePosition: { value: { x: 5, y: 0.3, z: -1 }, step: 0.1 },
    //   sceneRotation: { value: { x: 6.5, y: -3.7, z: 0 }, step: 0.01 },
    // });

    return (
      <group
      ref={modelRef}
      {...props}
      position={[5,0.3,-1]}
      rotation={[6.5,-3.7,0]}
      dispose={null}
    >
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={1200}>
          <mesh geometry={nodes.Dumbell_Grip_0.geometry} material={materials.Grip} />
          <mesh geometry={nodes.Dumbell_Plates_0.geometry} material={materials.Plates} />
          <mesh geometry={nodes.Dumbell_Black_0.geometry} material={materials.Black} />
          <mesh geometry={nodes.Dumbell_Gear_0.geometry} material={materials.Gear} />
        </group>
      </group>
    </group>
  );
}

export default function Scene() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Update the screen size when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop && (
        <Canvas className="canvas-bg" camera={{ position: [6, 3, 5.8] }}>
          <ambientLight intensity={0.6} />
          <Model />
          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      )}
    </>
  );
}

useGLTF.preload('/stylized_dumbell.glb');

// Camera controller component
// function CameraController() {
//   const { camera } = useThree();

//     camera.position.set(6,3,5.8);
 

//   return null;
// }
