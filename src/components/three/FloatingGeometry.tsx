"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Shape({
  position,
  geometry,
  speed,
  rotationAxis,
  color,
  wireframe = false,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus" | "dodecahedron";
  speed: number;
  rotationAxis: "x" | "y" | "xy";
  color: string;
  wireframe?: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (rotationAxis === "x") ref.current.rotation.x = t;
    else if (rotationAxis === "y") ref.current.rotation.y = t;
    else {
      ref.current.rotation.x = t * 0.7;
      ref.current.rotation.y = t;
    }
  });

  const geo = (() => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "torus":
        return <torusGeometry args={[1, 0.3, 16, 32]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
    }
  })();

  const isTorus = geometry === "torus";

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        {geo}
        {isTorus ? (
          <meshStandardMaterial
            color={color}
            wireframe={wireframe}
            transparent
            opacity={0.6}
            roughness={0.4}
            metalness={0.1}
            emissive="#C8C8CE"
            emissiveIntensity={1.5}
            toneMapped={false}
          />
        ) : (
          <meshStandardMaterial
            color={color}
            wireframe={wireframe}
            transparent
            opacity={wireframe ? 0.3 : 0.6}
            roughness={0.4}
            metalness={0.1}
          />
        )}
      </mesh>
    </Float>
  );
}

export function FloatingGeometry() {
  return (
    <group>
      <Shape
        position={[-2.5, 1.2, -1]}
        geometry="icosahedron"
        speed={0.3}
        rotationAxis="xy"
        color="#C8C8CE"
        wireframe
      />
      <Shape
        position={[2.8, -0.8, -2]}
        geometry="octahedron"
        speed={0.25}
        rotationAxis="y"
        color="#1C1C1F"
        wireframe
      />
      <Shape
        position={[-1.5, -1.5, -1.5]}
        geometry="torus"
        speed={0.2}
        rotationAxis="x"
        color="#C8C8CE"
      />
      <Shape
        position={[1.8, 1.5, -2.5]}
        geometry="dodecahedron"
        speed={0.15}
        rotationAxis="xy"
        color="#1C1C1F"
        wireframe
      />
    </group>
  );
}
