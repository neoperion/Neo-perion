import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float, ContactShadows, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';

interface GlassMonolithProps {
  isMobile: boolean;
}

const GlassMonolith: React.FC<GlassMonolithProps> = ({ isMobile }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current && core.current) {
      const time = state.clock.getElapsedTime();
      
      // Extremely subtle float/motion
      mesh.current.rotation.y = time * 0.04;
      mesh.current.rotation.x = Math.sin(time * 0.25) * 0.04;
      
      core.current.rotation.y = time * -0.06;
      core.current.rotation.z = time * 0.03;

      // Subtle mouse interaction
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;
      
      mesh.current.rotation.y += 0.02 * (targetX - mesh.current.rotation.y);
      mesh.current.rotation.x += 0.02 * (-targetY - mesh.current.rotation.x);
    }
  });

  return (
    <Float floatIntensity={1} rotationIntensity={0.2} speed={1.2}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        {/* The Outer Glass Monolith */}
        <icosahedronGeometry args={[2.5, 0]} />
        <MeshTransmissionMaterial 
          backside
          samples={isMobile ? 2 : 4} // Lower sample size on mobile to maximize frame rate
          thickness={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.5}
          temporalDistortion={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          roughness={0.05}
          transmission={1}
          color="#ffffff"
        />
        
        {/* The Inner Glowing Core */}
        <mesh ref={core}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshBasicMaterial color="#2563FF" wireframe />
        </mesh>
      </mesh>
      
      {/* Floating data particles inside/around */}
      <Sparkles 
        count={isMobile ? 20 : 45} 
        scale={5} 
        size={isMobile ? 1.2 : 2} 
        speed={0.3} 
        color="#4AA8FF" 
        opacity={0.4} 
      />
    </Float>
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

  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <ErrorBoundary fallback={null}>
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 45 }} 
          gl={{ antialias: true, alpha: true }}
          dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower DPR on mobile for smoothness
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#2563FF" />
          <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} color="#74C8FF" />
          
          <Environment preset="city" />
          
          <GlassMonolith isMobile={isMobile} />
          
          <ContactShadows position={[0, -3.5, 0]} opacity={0.2} scale={15} blur={2.5} far={4} color="#0f172a" />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};
