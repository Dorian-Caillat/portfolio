import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import { useRef } from "react";
import type { GLTF } from "three-stdlib";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const URL = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf';

export type TargetProps = ThreeElements['mesh'];

type TargetGLTF = GLTF;

const Target: React.FC<TargetProps> = (props) => {
    const targetRef = useRef<THREE.Mesh>(null)

    const gltf = useGLTF(URL) as TargetGLTF;

    const { scene } = gltf;

    useGSAP(() => {
    const mesh = targetRef.current;
    if (!mesh) return;

    gsap.to(mesh.position, {
      y: '+=1',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });
    
    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5} >
            <primitive object={scene} />
        </mesh>
    )
}

export default Target;
useGLTF.preload(URL);