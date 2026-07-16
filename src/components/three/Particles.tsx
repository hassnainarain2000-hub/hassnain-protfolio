"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function generateParticles(count: number) {
  const pos = new Float32Array(count * 3);
  const siz = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 12;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    siz[i] = Math.random() * 0.02 + 0.005;
  }
  return { pos, siz };
}

const count = 120;
const { pos, siz } = generateParticles(count);
const sharedGeometry = new THREE.BufferGeometry();
sharedGeometry.setAttribute("position", new THREE.BufferAttribute(pos, 3));
sharedGeometry.setAttribute("size", new THREE.BufferAttribute(siz, 1));

export function Particles() {
  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1;
    ref.current.rotation.y = t;
    ref.current.rotation.x = t * 0.3;
  });

  return (
    <points ref={ref} geometry={sharedGeometry}>
      <pointsMaterial
        size={0.03}
        color="#C9A96A"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
