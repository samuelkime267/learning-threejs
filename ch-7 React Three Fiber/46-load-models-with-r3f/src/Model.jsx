import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useGLTF, Clone } from "@react-three/drei";

useGLTF.preload("./hamburger-draco.glb");
const Model = () => {
  // const model = useLoader(
  //   GLTFLoader,
  //   "./FlightHelmet/glTF/FlightHelmet.gltf",
  //   (loader) => {
  //     const dracoLoader = new DRACOLoader();
  //     dracoLoader.setDecoderPath("./draco/");
  //     loader.setDRACOLoader(dracoLoader);
  //   }
  // );

  // const model = useLoader(GLTFLoader, "./hamburger.glb");

  // const model = useGLTF("./hamburger.glb");

  // const model = useGLTF("./hamburger-draco.glb");

  const model = useGLTF("./hamburger-draco.glb");

  return (
    <>
      <Clone object={model.scene} scale={0.35} position-x={-4} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
    </>
  );
};

export default Model;
