import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Optimize the model
  useEffect(() => {
    if (computer && computer.scene) {
      computer.scene.traverse((child) => {
        if (child.isMesh) {
          // Optimize meshes
          child.castShadow = false;
          child.receiveShadow = false;

          // Simplify geometry if possible
          if (child.geometry) {
            child.geometry.dispose();
          }
        }
      });
    }

    // Clean up
    return () => {
      if (computer) {
        computer.scene.traverse((child) => {
          if (child.isMesh && child.geometry) {
            child.geometry.dispose();
          }
        });
      }
    };
  }, [computer]);

  // Memoize lights to prevent unnecessary re-renders
  const lights = useMemo(() => (
    <>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.8} // Reduced intensity
        castShadow={false}
      />
      <pointLight intensity={0.8} /> {/* Reduced intensity */}
    </>
  ), []);

  return (
    <mesh>
      {lights}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows={false} // Disable shadows for better performance
      dpr={isMobile ? 1 : [1, 1.5]} // Lower resolution, especially on mobile
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: !isMobile, // Disable antialiasing on mobile
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={false} // Disable damping for better performance
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
