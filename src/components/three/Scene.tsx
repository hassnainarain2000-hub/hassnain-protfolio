"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { FloatingGeometry } from "./FloatingGeometry";
import { GlassSphere } from "./GlassSphere";
import { Particles } from "./Particles";

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
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} color="#C9A96A" />
          <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#16241C" />
          <pointLight position={[0, 3, 2]} intensity={0.5} color="#C9A96A" distance={10} />
          <FloatingGeometry />
          <GlassSphere />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
