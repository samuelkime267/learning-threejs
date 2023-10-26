import "./style.css";
import ReactDOM from "react-dom/client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    // flat
    gl={{
      antialias: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      // outputEncoding: THREE.LinearEncoding,
    }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [3, 2, 6],
    }}
  >
    <Experience />
  </Canvas>
);
