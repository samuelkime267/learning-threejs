import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
  useTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const material = new THREE.MeshMatcapMaterial();
const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);

export default function Experience() {
  // const [torusGeometry, setTorusGeometry] = useState();
  // const [material, setMaterial] = useState();

  // const [matCapTexture] = useMatcapTexture("46804D_CBE9AC_90B57C_95D38F", 256);
  // const [matCapTexture] = useMatcapTexture("660505_F2B090_DD4D37_AA1914", 256);
  // const [matCapTexture] = useMatcapTexture("736655_D9D8D5_2F281F_B1AEAB", 256);

  const texture = useTexture("/matcap/matcap.png");

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;

    material.matcap = texture;
    material.needsUpdate = true;
  }, []);
  // const donutsGroup = useRef();

  // useFrame((state, delta) => {
  //   for (const donut of donutsGroup.current.children) {
  //     donut.rotation.y += delta * 0.2;
  //   }
  // });

  const donuts = useRef([]);
  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <Center>
        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          HELLO R3
          <meshBasicMaterial
            color={"red"}
            // matcap={matCapTexture}
          />
        </Text3D>
      </Center>
      {[...Array(100)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          scale={0.2 + Math.random() * 0.2}
        >
          <torusGeometry args={[1, 0.6, 16, 32]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
      ))} */}
      {/* <torusGeometry args={[1, 0.6, 16, 32]} ref={setTorusGeometry} />
      <meshMatcapMaterial matcap={texture} ref={setMaterial} /> */}
      <Center>
        <Text3D
          material={material}
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          HELLO R3F
        </Text3D>
      </Center>

      {[...Array(100)].map((_, i) => (
        <mesh
          ref={(element) => (donuts.current[i] = element)}
          geometry={torusGeometry}
          material={material}
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          scale={0.2 + Math.random() * 0.2}
        />
      ))}

      {/* <group ref={donutsGroup}>
        {[...Array(100)].map((_, i) => (
          <mesh
            geometry={torusGeometry}
            material={material}
            key={i}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            scale={0.2 + Math.random() * 0.2}
          />
        ))}
      </group> */}
    </>
  );
}
