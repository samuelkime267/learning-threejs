import React from "react";

export default function Objects() {
  return (
    <>
      {/* sphere */}
      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* cube */}
      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        {/* <meshStandardMaterial color={[4, 1, 2]} toneMapped={false} /> */}
        {/* <meshStandardMaterial
          color="#ffffff"
          emissive="orange"
          toneMapped={false}
          emissiveIntensity={2}
        /> */}
        {/* <meshBasicMaterial color={[1.5, 1, 4]} toneMapped={false} /> */}
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      {/* plane */}
      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="#555555" metalness={0} roughness={0} />
      </mesh>
    </>
  );
}
