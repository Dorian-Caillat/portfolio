// Cube.tsx
import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';
import type { ThreeElements } from '@react-three/fiber';

const MODEL_URL = 'models/cube.glb';
const MATCAP_URL_DEFAULT = 'textures/cube.png';


export type CubeProps = ThreeElements['group'] & {
  matcapUrl?: string;
};


type CubeGLTF = GLTF & {
  nodes: {
    Cube: THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>;
  };
};

const Cube: React.FC<CubeProps> = ({ matcapUrl = MATCAP_URL_DEFAULT, ...props }) => {
  const { nodes } = useGLTF(MODEL_URL) as unknown as CubeGLTF;

 
  const texture = useTexture(matcapUrl) as THREE.Texture;

  
  const cubeRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);

  
  useGSAP(
    () => {
      const mesh = cubeRef.current;
      if (!mesh) return;

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.to(mesh.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        ease: 'none',
      });

      return () => tl.kill();
    },
    { dependencies: [hovered] }
  );

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0] as const}
        rotation={[2.6, 0.8, -1.8] as const}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload(MODEL_URL);


export default Cube;