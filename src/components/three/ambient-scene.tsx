'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as React from 'react';
import * as THREE from 'three';

/**
 * Site-wide ambient field — a slow-drifting cloud of points that gives every page a
 * subtle sense of depth. Deliberately minimal (two Sparkles layers, no meshes) so it
 * costs almost nothing. Rendered behind all content at low opacity.
 */
function Drift() {
  const group = React.useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.02;
    // Gentle parallax toward the pointer.
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      state.pointer.x * 0.5,
      0.02
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      state.pointer.y * 0.3,
      0.02
    );
  });
  return (
    <group ref={group}>
      <Sparkles count={50} scale={[14, 8, 6]} size={2.4} speed={0.25} opacity={0.5} color="#818cf8" />
      <Sparkles count={30} scale={[12, 7, 5]} size={1.6} speed={0.18} opacity={0.4} color="#2dd4bf" />
    </group>
  );
}

export default function AmbientScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true }} aria-hidden>
      <Drift />
    </Canvas>
  );
}
