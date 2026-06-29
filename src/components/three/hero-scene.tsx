'use client';

import * as React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Icosahedron,
  TorusKnot,
  MeshDistortMaterial,
  Float,
  Sparkles,
  Grid,
  Stars,
} from '@react-three/drei';
import * as THREE from 'three';

/**
 * Futuristic 3D hero accent. A glowing, pointer-reactive crystal orbited by a
 * wireframe knot, suspended over a Tron-style grid in a sparkle field. Deliberately
 * bounded (a few meshes + points) and only mounted on capable, motion-OK devices.
 */

function Crystal() {
  const ref = React.useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.2;
    // Ease toward the pointer for parallax depth.
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, pointer.y * 0.5, 0.05);
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, pointer.x * 0.35, 0.05);
  });

  return (
    <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1}>
      <Icosahedron ref={ref} args={[1.2, 8]}>
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#14b8a6"
          emissiveIntensity={0.35}
          roughness={0.12}
          metalness={0.65}
          distort={0.4}
          speed={1.8}
        />
      </Icosahedron>
    </Float>
  );
}

/** A wireframe knot slowly orbiting the crystal — the "holographic" layer. */
function OrbitingKnot() {
  const group = React.useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y -= delta * 0.35;
  });
  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={0.6}>
        <TorusKnot args={[0.42, 0.13, 128, 16]} position={[2, 0.6, -0.5]} scale={0.6}>
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.5}
            wireframe
          />
        </TorusKnot>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 4.4], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 3]} intensity={1.3} />
      <pointLight position={[-3, -2, -2]} intensity={2.5} color="#14b8a6" />
      <pointLight position={[3, -1, 2]} intensity={1.8} color="#6366f1" />

      <Crystal />
      <OrbitingKnot />

      {/* Floating particle field for ambience. */}
      <Sparkles count={60} scale={6} size={3} speed={0.4} opacity={0.6} color="#a5b4fc" />

      {/* Tron-style grid floor, faded into the distance. */}
      <Grid
        position={[0, -2.2, 0]}
        args={[20, 20]}
        cellSize={0.6}
        cellThickness={0.6}
        cellColor="#3730a3"
        sectionSize={3}
        sectionThickness={1.2}
        sectionColor="#14b8a6"
        fadeDistance={18}
        fadeStrength={1.5}
        infiniteGrid
      />

      <Stars radius={60} depth={40} count={900} factor={3} saturation={0} fade speed={0.4} />
    </Canvas>
  );
}
