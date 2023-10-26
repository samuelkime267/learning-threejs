import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import Objects from "./Objects";
import Effects from "./Effects";

export default function Experience() {
  return (
    <>
      {/* <color args={["#000000"]} attach="background" /> */}
      <color args={["#ffffff"]} attach="background" />

      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <Lights />
      <Objects />
      <Effects />
    </>
  );
}
