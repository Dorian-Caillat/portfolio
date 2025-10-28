import * as THREE from 'three';
import React, { useCallback, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Center, useTexture } from '@react-three/drei';
import type { ThreeElements } from '@react-three/fiber';

type Vec3 = [number, number, number];

export type RingsProps = {
  position: Vec3;
} & Omit<ThreeElements['group'], 'position'>;

const MATCAP_URL = 'textures/rings.png';

const Rings: React.FC<RingsProps> = ({ position }) => {
  
  const refs = useRef<Array<THREE.Mesh | null>>([]);

  
  const setRef = useCallback(
    (i: number) => (mesh: THREE.Mesh | null) => {
      refs.current[i] = mesh;
    },
    []
  );

  const texture = useTexture(MATCAP_URL) as THREE.Texture;

  useGSAP(
    () => {
      
      const list = refs.current.filter((m): m is THREE.Mesh => !!m);
      if (list.length === 0) return;

      for (const r of list) r.position.set(...position);

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.to(
        list.map((r) => r.rotation), 
        {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 2.5,
          ease: 'none',
          stagger: { each: 0.15 },
        }
      );
      return () => tl.kill();
    },
    { dependencies: [...position] }
  );

  return (
    <Center disable>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, i) => (
          <mesh key={i} ref={setRef(i)}>
            <torusGeometry args={[ (i + 1) * 0.5, 0.1 ] as const} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;


useTexture.preload?.(MATCAP_URL);
