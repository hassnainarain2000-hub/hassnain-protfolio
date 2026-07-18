"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import { FloatingGeometry } from "./FloatingGeometry";
import { GlassSphere } from "./GlassSphere";
import { Particles } from "./Particles";

function MouseParallax() {
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 0.3;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame(({ camera }) => {
    mouse.current.x += (target.current.x - mouse.current.x) * 0.05;
    mouse.current.y += (target.current.y - mouse.current.y) * 0.05;
    camera.position.x = mouse.current.x;
    camera.position.y = mouse.current.y;
  });

  return null;
}

function PostEffects() {
  const [Module, setModule] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      import("@react-three/postprocessing").then((mod) => {
        const { EffectComposer, Bloom, Vignette } = mod;
        const Comp = () => (
          <EffectComposer>
            <Bloom intensity={0.4} luminanceThreshold={0.4} mipmapBlur />
            <Vignette offset={0.3} darkness={0.5} />
          </EffectComposer>
        );
        setModule(() => Comp);
      });
    }
  }, []);

  if (!Module) return null;
  return <Module />;
}

function SceneGroup() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <FloatingGeometry />
      <GlassSphere />
      <Particles />
    </group>
  );
}

import * as THREE from "three";

export function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} color="#0A120D" />
          <directionalLight position={[5, 5, 5]} intensity={0.7} color="#C9A96A" />
          <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#16241C" />
          <pointLight position={[0, 3, 2]} intensity={0.6} color="#C9A96A" distance={12} />
          <pointLight position={[-3, -2, 1]} intensity={0.3} color="#C9A96A" distance={8} />
          <MouseParallax />
          <SceneGroup />
          <PostEffects />
        </Suspense>
      </Canvas>
    </div>
  );
}
