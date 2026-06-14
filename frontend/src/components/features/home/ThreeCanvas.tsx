import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random positions for the particles
  const [positions] = useState(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06b6d4" // Cyan
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

// Node Connections
const NetworkConnections = () => {
  const ref = useRef<THREE.LineSegments>(null);
  const nodeCount = 50;

  const { positions, indices } = useMemo(() => {
    const positions = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    const indices = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        // Create connection if nodes are close enough
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (dist < 3.5) {
          indices.push(i, j);
        }
      }
    }
    return { positions, indices: new Uint16Array(indices) };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 20;
      ref.current.rotation.y += delta / 30;
    }
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="index" array={indices} itemSize={1} count={indices.length} />
      </bufferGeometry>
      <lineBasicMaterial color="#a855f7" transparent opacity={0.15} />
    </lineSegments>
  );
};

export const ThreeCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fallbackBackground = (
    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#050816] to-[#050816]"></div>
  );

  // Fallback for mobile devices to maintain high FPS
  if (isMobile) {
    return fallbackBackground;
  }

  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <ErrorBoundary fallback={fallbackBackground}>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <fog attach="fog" args={['#050816', 5, 15]} />
          <ParticleField />
          <NetworkConnections />
        </Canvas>
      </ErrorBoundary>
      {/* Overlay gradient to blend canvas edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-transparent to-[#050816]" />
    </div>
  );
};
