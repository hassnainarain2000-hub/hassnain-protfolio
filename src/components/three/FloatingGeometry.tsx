"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
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
    ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.2;
    ref.current.position.x = position[0] + Math.cos(t * 0.3) * 0.1;
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

  return (
    <mesh ref={ref} position={position}>
      {geo}
      <meshStandardMaterial
        color={color}
        wireframe={wireframe}
        transparent
        opacity={wireframe ? 0.3 : 0.6}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
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
        color="#C9A96A"
        wireframe
      />
      <Shape
        position={[2.8, -0.8, -2]}
        geometry="octahedron"
        speed={0.25}
        rotationAxis="y"
        color="#16241C"
        wireframe
      />
      <Shape
        position={[-1.5, -1.5, -1.5]}
        geometry="torus"
        speed={0.2}
        rotationAxis="x"
        color="#C9A96A"
      />
      <Shape
        position={[1.8, 1.5, -2.5]}
        geometry="dodecahedron"
        speed={0.15}
        rotationAxis="xy"
        color="#16241C"
        wireframe
      />
    </group>
  );
}
