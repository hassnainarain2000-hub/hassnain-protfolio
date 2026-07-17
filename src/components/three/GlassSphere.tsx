"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Sphere({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.1;
  });

  return (
    <Float speed={1} floatIntensity={0.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#C8C8CE"
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.2}
          transmission={0.6}
          thickness={0.5}
        />
      </mesh>
    </Float>
  );
}

export function GlassSphere() {
  return (
    <group>
      <Sphere position={[3, 0.5, -3]} scale={0.6} />
      <Sphere position={[-3, -1, -2]} scale={0.4} />
      <Sphere position={[0, 2, -4]} scale={0.8} />
    </group>
  );
}
