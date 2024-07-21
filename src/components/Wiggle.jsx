import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { WiggleBone } from "wiggle";
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';

const Wiggle = () => {
  const { nodes, scene } = useGLTF('./models/dil.glb');
  const wiggleBones = useRef([]);
  const { gl, camera } = useThree();
  const modelRef = useRef();

  useEffect(() => {
    if (!nodes || !nodes.rootbone) return;

    wiggleBones.current.length = 0;
    nodes.rootbone.traverse((bone) => {
      if (bone.isBone && bone !== nodes.rootbone) {
        const wiggleBone = new WiggleBone(bone, {
          velocity: 0.3,
        });
        wiggleBones.current.push(wiggleBone);
      }
    });

    return () => {
      wiggleBones.current.forEach((wiggleBone) => {
        wiggleBone.reset();
        wiggleBone.dispose();
      });
    };
  }, [nodes]);

  useFrame(() => {
    wiggleBones.current.forEach((wiggleBone) => {
      wiggleBone.update();
    });
  });

  const bind = useDrag(({ offset: [x, y] }) => {
    modelRef.current.position.x = x / 50; // Adjust these values to fit your scene scale
    modelRef.current.position.y = -y / 50;
  }, {
    pointerEvents: true,
  });

  return (
    <primitive 
      object={scene} 
      scale={0.7} 
      ref={modelRef} 
      {...bind()} 
    />
  );
};

export default Wiggle;
