import * as THREE from "three";
import Camera from "./Camera";
import Renderer from "./Renderer";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import World from "./World/World";
import Resources from "./Utils/Resources";
import sourcesData from "./sourcesData";
import Debug from "./Utils/Debug";

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) return instance;
    instance = this;

    window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sourcesData);
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    // Resize event
    this.sizes.on("resize", () => this.resize());

    //Time tick event
    this.time.on("tick", () => this.update());
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }

  destroy() {
    this.sizes.off("resize");
    this.time.off("tick");

    //Traverse the whole scene
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        for (const key in child.material) {
          const value = child.material[key];
          if (value && typeof value.dispose === "function") {
            value.dispose();
          }
        }
      }
    });

    //Dispose orbit control
    this.camera.controls.dispose();

    // dispose renderer
    this.renderer.instance.dispose();

    // destroy gui
    if (this.debug.active) {
      this.debug.ui.destroy();
    }
  }
}
