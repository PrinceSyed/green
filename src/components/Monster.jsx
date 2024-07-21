import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';
import { useLoader } from '@react-three/fiber';

export function Monster(props) {
  const { nodes, materials } = useGLTF('./models/monster.glb');

  // Load and configure the texture
  const texture = useLoader(TextureLoader, './textures/vbase.png');
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(4, 4); // Adjust the tiling factor as needed

  // Clone the material and apply the texture
  const tiledMaterial = useMemo(() => {
    const material = materials['Vehicle 0 Atlas'].clone();
    material.map = texture;
    material.needsUpdate = true;
    return material;
  }, [materials, texture]);

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Base_Mesh">
          <mesh
            name="Axle_Front"
            castShadow
            receiveShadow
            geometry={nodes.Axle_Front.geometry}
            material={materials['Vehicle 0 Atlas']}
            position={[0, 0.56076, -1.02284]}
          />
          <mesh
            name="Axle_Rear"
            castShadow
            receiveShadow
            geometry={nodes.Axle_Rear.geometry}
            material={materials['Vehicle 0 Atlas']}
            position={[0, 0.56096, 1.00263]}
          />
          <mesh
            name="Bucket"
            castShadow
            receiveShadow
            geometry={nodes.Bucket.geometry}
            material={materials['Vehicle 0 Atlas']}
          />
          <mesh
            name="Bucket_Handle"
            castShadow
            receiveShadow
            geometry={nodes.Bucket_Handle.geometry}
            material={materials['Vehicle 0 Atlas']}
          />
          <mesh
            name="Bucket_Inner"
            castShadow
            receiveShadow
            geometry={nodes.Bucket_Inner.geometry}
            material={materials['Vehicle 0 Atlas']}
          />
          <mesh
            name="Chasis_bottom"
            castShadow
            receiveShadow
            geometry={nodes.Chasis_bottom.geometry}
            material={materials['Vehicle 0 Atlas']}
          />
          <group name="Chasis_Top">
            <mesh
              name="Scene042"
              castShadow
              receiveShadow
              geometry={nodes.Scene042.geometry}
              material={tiledMaterial} // Applied the tiled material here
            />
            <mesh
              name="Scene042_1"
              castShadow
              receiveShadow
              geometry={nodes.Scene042_1.geometry}
              material={materials['Vehicle 0 Atlas']}
            />
          </group>
          <mesh
            name="Doorhandle_Back"
            castShadow
            receiveShadow
            geometry={nodes.Doorhandle_Back.geometry}
            material={nodes.Doorhandle_Back.material}
          />
          <mesh
            name="Doorhandle_Left"
            castShadow
            receiveShadow
            geometry={nodes.Doorhandle_Left.geometry}
            material={materials['Vehicle 0 Atlas']}
          />
          <mesh
            name="Doorhanle_Right"
            castShadow
            receiveShadow
            geometry={nodes.Doorhanle_Right.geometry}
            material={materials['Vehicle 0 Atlas']}
          />
          <mesh
            name="Wheels_FL"
            castShadow
            receiveShadow
            geometry={nodes.Wheels_FL.geometry}
            material={materials['Vehicle 0 Atlas']}
            position={[-0.71127, 0.51113, -1.07159]}
          />
          <mesh
            name="Wheels_FR"
            castShadow
            receiveShadow
            geometry={nodes.Wheels_FR.geometry}
            material={materials['Vehicle 0 Atlas']}
            position={[0.70579, 0.51113, -1.07159]}
          />
          <mesh
            name="Wheels_RL001"
            castShadow
            receiveShadow
            geometry={nodes.Wheels_RL001.geometry}
            material={materials['Vehicle 0 Atlas']}
            position={[-0.71127, 0.51113, 1.06263]}
          />
          <mesh
            name="Wheels_RR"
            castShadow
            receiveShadow
            geometry={nodes.Wheels_RR.geometry}
            material={materials['Vehicle 0 Atlas']}
            position={[0.7058, 0.51113, 1.06263]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/monster.glb');
