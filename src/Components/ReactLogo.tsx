// ReactLogo.tsx
import * as THREE from 'three';
import React from 'react';
import { Float, useGLTF } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';
import type { ThreeElements } from '@react-three/fiber';

const URL = '/models/react.glb';


export type ReactLogoProps = ThreeElements['group'];


type ReactGLTF = GLTF & {
  nodes: {
    'React-Logo_Material002_0': THREE.Mesh<
      THREE.BufferGeometry,
      THREE.Material | THREE.Material[]
    >;
  };
  materials: {
    'Material.002': THREE.Material; 
  };
};

const ReactLogo: React.FC<ReactLogoProps> = (props) => {

  const { nodes, materials } = useGLTF(URL) as unknown as ReactGLTF;

  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.5} {...props}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, -10] as const}
          rotation={[0, 0, -Math.PI / 2] as const}
          scale={[0.39, 0.39, 0.5 ] as const}
        />
      </group>
    </Float>
  );
};

export default ReactLogo;
useGLTF.preload(URL);
