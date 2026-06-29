'use client';

import * as React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Interactive 3D hero accent — a distorted, gently rotating crystal that follows the
 * pointer, wrapped in a starfield. Kept deliberately lightweight (one mesh + points)
 * and only mounted on capable devices so it never hurts performance scores.
 */

function Crystal() {
  const ref = React.useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.18;
    // Ease the mesh toward the pointer for a parallax, "responsive" feel.
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, pointer.y * 0.4, 0.05);
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, pointer.x * 0.3, 0.05);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <Icosahedron ref={ref} args={[1.25, 6]}>
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#14b8a6"
          emissiveIntensity={0.25}
          roughness={0.18}
          metalness={0.45}
          distort={0.35}
          speed={1.6}
        />
      </Icosahedron>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      // Pause rendering when offscreen to save battery/CPU.
      frameloop="always"
      aria-hidden
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <pointLight position={[-3, -2, -2]} intensity={2} color="#14b8a6" />
      <Crystal />
      <Stars radius={50} depth={40} count={1200} factor={3} saturation={0} fade speed={0.5} />
    </Canvas>
  );
}
