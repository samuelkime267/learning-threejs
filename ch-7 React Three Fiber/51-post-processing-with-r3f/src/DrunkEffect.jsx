import { Uniform } from "three";
import { BlendFunction, Effect } from "postprocessing";

const fragmentShader = /* glsl */ `
  uniform float frequency;
  uniform float amplitude;
  uniform float offset;

  void mainUv(inout vec2 uv){
     uv.y += sin(uv.x * frequency + offset) * amplitude;
  }

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
    outputColor = vec4(0.8, 1.0, 0.5, inputColor.a);
  }
`;

export default class DrunkEffect extends Effect {
  constructor({ frequency, amplitude, blendFunction = BlendFunction.DARKEN }) {
    super("DrunkEffect", fragmentShader, {
      blendFunction,
      uniforms: new Map([
        // ["frequency", { value: frequency }],
        // ["amplitude", { value: amplitude }],
        ["frequency", new Uniform(frequency)],
        ["amplitude", new Uniform(amplitude)],
        ["offset", new Uniform(0)],
      ]),
    });
  }
  update() {
    this.uniforms.get("offset").value += 0.02;
  }
}

/* 

FOR POST PROCESSING EFFECT SHADER

const means that the parameter is not writable.

in means that it’s a copy of the actual variable and changing it won’t affect the initial variable sent when calling the function.

out means that changing this value will change the variable sent when calling the function.
It prevents us from making mistakes but also gives us a hint about what variables we need to change:

inout this means that we can both read and write it.





inputColor contains the current color for that pixel which is defined by the previous effects.

uv contains the render coordinates (from 0,0 at the bottom left corner to 1,1 in the top right corner).

outputColor is what we need to change in order to apply the effect.

*/
