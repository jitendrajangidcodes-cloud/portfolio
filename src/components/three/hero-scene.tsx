'use client';

import * as React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Icosahedron,
  TorusKnot,
  MeshTransmissionMaterial,
  Float,
  Sparkles,
  Environment,
  Lightformer,
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

/**
 * Premium "3D animation exploration" hero. A glassy, refractive crystal with chromatic
 * aberration, lit by an in-memory studio environment (no network HDR), orbited by glowing
 * accent geometry, finished with a bloom pass. Pointer-reactive for parallax depth.
 *
 * Heavy by design but bounded: a few meshes, low transmission samples, capped DPR, and
 * only ever mounted on desktop / motion-OK devices (see hero-canvas.tsx).
 */

function GlassCrystal() {
  const ref = React.useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, pointer.y * 0.4, 0.04);
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, pointer.x * 0.3, 0.04);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.9}>
      <Icosahedron ref={ref} args={[1.25, 12]}>
        <MeshTransmissionMaterial
          samples={6}
          resolution={512}
          thickness={1.4}
          roughness={0.06}
          ior={1.4}
          chromaticAberration={0.45}
          anisotropy={0.3}
          distortion={0.4}
          distortionScale={0.4}
          temporalDistortion={0.2}
          color="#c7d2fe"
          background={new THREE.Color('#0a0e1a')}
        />
      </Icosahedron>
    </Float>
  );
}

/** Glowing accent geometry the bloom pass lights up. */
function Accents() {
  const group = React.useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y -= delta * 0.3;
  });
  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={0.8}>
        <TorusKnot args={[0.4, 0.12, 160, 20]} position={[2.1, 0.7, -0.5]} scale={0.55}>
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.2} toneMapped={false} />
        </TorusKnot>
      </Float>
      <Float speed={2.4} floatIntensity={1.4}>
        <mesh position={[-2.2, -0.8, 0.3]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2.5} toneMapped={false} />
        </mesh>
      </Float>
      <Float speed={1.8} floatIntensity={1.1}>
        <mesh position={[1.6, -1.1, 0.8]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={2.5} toneMapped={false} />
        </mesh>
      </Float>
    </group>
  );
}

/** Studio environment built from light cards — gives the glass real reflections, no network. */
function StudioEnv() {
  return (
    <Environment resolution={256}>
      <Lightformer intensity={2} position={[0, 3, 2]} scale={[6, 3, 1]} color="#818cf8" />
      <Lightformer intensity={1.4} position={[-3, -1, 1]} scale={[4, 4, 1]} color="#2dd4bf" />
      <Lightformer intensity={1.2} position={[3, 1, -2]} scale={[4, 4, 1]} color="#f0abfc" />
      <Lightformer intensity={3} position={[0, -3, 0]} scale={[8, 2, 1]} color="#ffffff" />
    </Environment>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 4.6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 3]} intensity={1.1} />
      <pointLight position={[-3, -2, -2]} intensity={2} color="#14b8a6" />

      <GlassCrystal />
      <Accents />
      <Sparkles count={70} scale={7} size={3} speed={0.35} opacity={0.55} color="#a5b4fc" />

      <StudioEnv />

      <EffectComposer enableNormalPass={false}>
        <Bloom mipmapBlur luminanceThreshold={0.55} intensity={0.9} radius={0.7} />
      </EffectComposer>
    </Canvas>
  );
}
