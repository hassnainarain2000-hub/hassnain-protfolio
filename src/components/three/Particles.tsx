"use client";

import { useRef, useMemo } from "react";
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

function getParticleCount() {
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return 80;
  }
  return 200;
}

export function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const count = useMemo(() => getParticleCount(), []);
  const { pos, siz } = useMemo(() => generateParticles(count), [count]);
  const sharedGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geom.setAttribute("size", new THREE.BufferAttribute(siz, 1));
    return geom;
  }, [pos, siz]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.1;
    ref.current.rotation.x = t * 0.03;

    const positions = ref.current.geometry.attributes.position;
    if (positions) {
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const baseY = pos[i3 + 1];
        const baseX = pos[i3];
        const arr = positions.array as Float32Array;
        arr[i3 + 1] = baseY + Math.sin(t * 0.5 + baseX * 0.5) * 0.1;
      }
      positions.needsUpdate = true;
    }
  });

  return (
    <points ref={ref} geometry={sharedGeometry}>
      <pointsMaterial
        size={0.03}
        color="#C8C8CE"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
