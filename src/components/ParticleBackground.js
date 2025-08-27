import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleField() {
  const ref = useRef();
  
  // Create particles manually since maath might not be available
  const sphere = useMemo(() => {
    const particles = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const radius = 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      particles[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particles[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particles[i * 3 + 2] = radius * Math.cos(phi);
    }
    return particles;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={ref}>
      <Points
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#00ffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function ParticleBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      background: 'radial-gradient(circle at center, rgba(0,255,255,0.1) 0%, transparent 70%)'
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}

export default ParticleBackground; 