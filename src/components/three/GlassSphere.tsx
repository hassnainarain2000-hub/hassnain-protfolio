"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Sphere({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.y = position[1] + Math.sin(t) * 0.3;
    ref.current.position.x = position[0] + Math.cos(t * 0.7) * 0.15;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial
        color="#C9A96A"
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.2}
        transmission={0.6}
        thickness={0.5}
      />
    </mesh>
  );
}

export function GlassSphere() {
  return (
    <group>
      <Sphere position={[3, 0.5, -3]} scale={0.6} speed={0.4} />
      <Sphere position={[-3, -1, -2]} scale={0.4} speed={0.3} />
      <Sphere position={[0, 2, -4]} scale={0.8} speed={0.2} />
    </group>
  );
}
