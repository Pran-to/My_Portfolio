import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  Sparkles,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Environment,
  Stars,
  Torus,
  TorusKnot,
  Octahedron,
} from '@react-three/drei';
import * as THREE from 'three';

function ScrollReactiveRig({ scrollProgress }) {
  const groupRef = useRef();
  const knotRef = useRef();
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const satellitesRef = useRef();

  const satellitePositions = useMemo(() => {
    const items = [];
    const count = 18;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3.1 + (i % 3) * 0.85;
      const yOffset = ((i % 5) - 2) * 0.7;
      items.push({
        position: [Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius],
        scale: 0.06 + (i % 4) * 0.035,
        color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#818cf8' : '#e879f9',
      });
    }
    return items;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const p = scrollProgress;

    if (groupRef.current) {
      const targetX = Math.sin(p * Math.PI * 2) * 2.1 + (p < 0.18 ? 1.95 : 0);
      const targetY = -p * 1.2 + Math.cos(p * Math.PI) * 0.35;
      const targetZ = -p * 1.8;

      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetX,
        delta * 3
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        targetY,
        delta * 3
      );
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        targetZ,
        delta * 3
      );

      const pointerX = state.pointer.x * 0.4;
      const pointerY = state.pointer.y * 0.28;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        p * Math.PI * 3.2 + pointerX,
        delta * 2.5
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        p * Math.PI * 0.75 - pointerY,
        delta * 2.5
      );
    }

    if (knotRef.current) {
      knotRef.current.rotation.y = t * 0.32;
      knotRef.current.rotation.x = t * 0.18;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = Math.PI / 3 + t * 0.25 + p * 2.6;
      outerRingRef.current.rotation.y = t * 0.16;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = -t * 0.38 - p * 3.0;
      innerRingRef.current.rotation.z = Math.PI / 4 + t * 0.22;
    }

    if (satellitesRef.current) {
      satellitesRef.current.rotation.y = t * 0.16 + p * Math.PI;
    }
  });

  const coreColor = useMemo(() => {
    if (scrollProgress < 0.22) return '#0ea5e9';
    if (scrollProgress < 0.48) return '#6366f1';
    if (scrollProgress < 0.75) return '#c084fc';
    return '#10b981';
  }, [scrollProgress]);

  return (
    <group ref={groupRef} position={[1.95, 0, 0]}>
      <Float speed={2.1} rotationIntensity={0.45} floatIntensity={0.85}>
        {/* Iridescent Sculpted TorusKnot Core */}
        <TorusKnot ref={knotRef} args={[0.92, 0.3, 180, 32, 2, 3]}>
          <MeshDistortMaterial
            color={coreColor}
            emissive={coreColor}
            emissiveIntensity={0.42}
            roughness={0.14}
            metalness={0.9}
            distort={0.22 + scrollProgress * 0.16}
            speed={2.4}
          />
        </TorusKnot>

        {/* Outer Glass Halo Shell */}
        <mesh>
          <icosahedronGeometry args={[1.68, 2]} />
          <meshStandardMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.18}
          />
        </mesh>

        {/* Dual Precision Gyroscope Rings */}
        <Torus ref={outerRingRef} args={[2.35, 0.02, 16, 120]}>
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.7}
            metalness={0.95}
            roughness={0.08}
          />
        </Torus>

        <Torus ref={innerRingRef} args={[1.98, 0.016, 16, 120]}>
          <meshStandardMaterial
            color="#e879f9"
            emissive="#e879f9"
            emissiveIntensity={0.65}
            metalness={0.95}
            roughness={0.08}
          />
        </Torus>
      </Float>

      {/* Orbiting Data Nodes */}
      <group ref={satellitesRef}>
        {satellitePositions.map((node, idx) => (
          <Octahedron
            key={idx}
            position={node.position}
            scale={node.scale}
            args={[1, 0]}
          >
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.9}
            />
          </Octahedron>
        ))}
      </group>
    </group>
  );
}

export default function PortfolioScene({ scrollProgress = 0 }) {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* Modern Aurora Gradient Mesh Orbs behind WebGL */}
      <div
        className="absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full bg-cyan-500/15 blur-[130px] transition-transform duration-1000"
        style={{
          transform: `translate3d(${scrollProgress * 90}px, ${scrollProgress * 60}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[36rem] w-[36rem] rounded-full bg-indigo-600/18 blur-[140px] transition-transform duration-1000"
        style={{
          transform: `translate3d(${-scrollProgress * 110}px, ${-scrollProgress * 40}px, 0)`,
        }}
      />
      <div
        className="absolute -bottom-36 left-1/4 h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/12 blur-[140px]"
      />

      {/* Architectural Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-85" />

      {/* Three.js WebGL Layer */}
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <fog attach="fog" args={['#030712', 6.5, 19]} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 6, 5]} intensity={1.8} color="#38bdf8" />
        <pointLight position={[-6, -4, 3]} intensity={1.5} color="#e879f9" />
        <pointLight position={[0, 4, -4]} intensity={1.1} color="#34d399" />

        <Stars
          radius={55}
          depth={40}
          count={2800}
          factor={3.5}
          saturation={0.55}
          fade
          speed={0.85}
        />

        <Sparkles
          count={110}
          scale={13}
          size={2.3}
          speed={0.42}
          opacity={0.5}
          color="#7dd3fc"
        />

        <ScrollReactiveRig scrollProgress={scrollProgress} />

        <Environment preset="city" />
      </Canvas>

      {/* Subtle Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,#030712_96%)] opacity-85" />
    </div>
  );
}
