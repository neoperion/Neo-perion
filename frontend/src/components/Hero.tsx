import { ArrowRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float, ContactShadows, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const GlassMonolith = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current && core.current) {
      const time = state.clock.getElapsedTime();
      // Gentle constant rotation
      mesh.current.rotation.y = time * 0.15;
      mesh.current.rotation.x = Math.sin(time * 0.5) * 0.1;
      
      core.current.rotation.y = time * -0.2;
      core.current.rotation.z = time * 0.1;

      // Subtle mouse interaction
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      mesh.current.rotation.y += 0.05 * (targetX - mesh.current.rotation.y);
      mesh.current.rotation.x += 0.05 * (-targetY - mesh.current.rotation.x);
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={0.5} speed={2}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        {/* The Outer Glass Monolith */}
        <icosahedronGeometry args={[2.5, 0]} />
        <MeshTransmissionMaterial 
          backside
          samples={4}
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
      <Sparkles count={50} scale={5} size={2} speed={0.4} color="#4AA8FF" opacity={0.5} />
    </Float>
  );
};

const WebGLCanvas = () => {
  return (
    <div className="absolute top-0 right-0 w-full md:w-3/5 h-full z-0 opacity-100 hidden md:block">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#2563FF" />
        <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} color="#74C8FF" />
        
        <Environment preset="city" />
        
        <GlassMonolith />
        
        <ContactShadows position={[0, -3.5, 0]} opacity={0.3} scale={15} blur={2.5} far={4} color="#0f172a" />
      </Canvas>
    </div>
  );
};

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 pb-16 md:pt-0 border-b border-slate-900/5">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* WebGL Refractive Glass Canvas */}
      <WebGLCanvas />

      {/* Content Container */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pointer-events-none">
        <div className="grid lg:grid-cols-[5fr_5fr] gap-12 lg:gap-8 items-center">
          
          {/* Left: Editorial Statement */}
          <div className="space-y-8 fade-in relative z-20 pointer-events-auto">

            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-black tracking-[-0.02em] leading-[1.05] text-slate-900 font-display">
              Build Software <br/>
              That <br/>
              <span className="font-serif italic font-normal text-neo-gradient relative inline-block">
                Scales
                <div className="absolute bottom-1 left-0 w-full h-[6px] bg-neo-gradient rounded-full opacity-50"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-xl">
              We engineer intelligent, cloud-native platforms for enterprises that refuse to move slowly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => scrollToSection("#contact")}
                className="group relative h-14 px-8 bg-slate-900 text-white rounded-full text-base font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/20 inline-flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                  Initiate Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection("#case-studies")}
                className="h-14 px-8 rounded-full border border-slate-200 text-slate-700 text-base font-bold hover:border-slate-900 hover:text-slate-900 transition-colors bg-white/50 backdrop-blur inline-flex items-center justify-center tracking-wide"
              >
                Explore Our Work
              </button>
            </div>
          </div>

          {/* Right: Empty space for 3D Canvas */}
          <div className="hidden md:block pointer-events-auto w-full h-[600px]">
            {/* The canvas is positioned absolutely to fill the right side of the screen, allowing it to overflow the container gracefully. */}
          </div>
          
        </div>
      </div>
    </section>
  );
};


