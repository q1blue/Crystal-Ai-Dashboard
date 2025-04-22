import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

interface NodeProps {
  position: [number, number, number];
  color: string;
  pulse?: boolean;
}

const Node: React.FC<NodeProps> = ({ position, color, pulse = false }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && pulse) {
      meshRef.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      );
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}

const Connection: React.FC<ConnectionProps> = ({ start, end, color }) => {
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color={color} linewidth={2} transparent opacity={0.6} />
    </line>
  );
};

export const HolographicScene: React.FC = () => {
  return (
    <Canvas style={{ background: 'transparent' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Neural Network Nodes */}
      <Node position={[-4, 2, 0]} color="#8B5CF6" pulse />
      <Node position={[-4, -2, 0]} color="#8B5CF6" pulse />
      <Node position={[0, 3, 0]} color="#3B82F6" />
      <Node position={[0, 0, 0]} color="#3B82F6" />
      <Node position={[0, -3, 0]} color="#3B82F6" />
      <Node position={[4, 2, 0]} color="#10B981" pulse />
      <Node position={[4, -2, 0]} color="#10B981" pulse />
      
      {/* Connections */}
      <Connection start={[-4, 2, 0]} end={[0, 3, 0]} color="#8B5CF6" />
      <Connection start={[-4, 2, 0]} end={[0, 0, 0]} color="#8B5CF6" />
      <Connection start={[-4, -2, 0]} end={[0, 0, 0]} color="#8B5CF6" />
      <Connection start={[-4, -2, 0]} end={[0, -3, 0]} color="#8B5CF6" />
      <Connection start={[0, 3, 0]} end={[4, 2, 0]} color="#3B82F6" />
      <Connection start={[0, 0, 0]} end={[4, 2, 0]} color="#3B82F6" />
      <Connection start={[0, 0, 0]} end={[4, -2, 0]} color="#3B82F6" />
      <Connection start={[0, -3, 0]} end={[4, -2, 0]} color="#3B82F6" />
      
      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom 
          intensity={0.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
        />
        <ChromaticAberration offset={[0.002, 0.002]} />
      </EffectComposer>
      
      <Environment preset="city" />
    </Canvas>
  );
};

export default HolographicScene;