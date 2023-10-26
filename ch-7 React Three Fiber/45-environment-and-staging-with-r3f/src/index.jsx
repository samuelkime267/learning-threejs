import * as THREE from "three";
import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Leva } from "leva";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// const created = ({ gl }) => {
//   gl.setClearColor("#ff0000", 1);
// };
// const created = ({ scene }) => {
//   scene.background = new THREE.Color("#ff0000");
// };

root.render(
  <>
    <Leva collapsed />
    <Canvas
      shadows={false}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      // onCreated={created}
    >
      <Experience />
    </Canvas>
  </>
);
