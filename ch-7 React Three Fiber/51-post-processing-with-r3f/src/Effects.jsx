import React from "react";
import Drunk from "./Drunk";
import { useRef } from "react";
import { useControls } from "leva";
import { BlendFunction, GlitchMode } from "postprocessing";
import {
  Noise,
  Glitch,
  Vignette,
  EffectComposer,
  Bloom,
  DepthOfField,
  SSR,
} from "@react-three/postprocessing";

export default function Effects() {
  // const ssrProps = useControls("SSR Effect", {
  //   temporalResolve: true,
  //   STRETCH_MISSED_RAYS: true,
  //   USE_MRT: true,
  //   USE_NORMALMAP: true,
  //   USE_ROUGHNESSMAP: true,
  //   ENABLE_JITTERING: true,
  //   ENABLE_BLUR: true,
  //   temporalResolveMix: { value: 0.9, min: 0, max: 1 },
  //   temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
  //   maxSamples: { value: 0, min: 0, max: 1 },
  //   resolutionScale: { value: 1, min: 0, max: 1 },
  //   blurMix: { value: 0.5, min: 0, max: 1 },
  //   blurKernelSize: { value: 8, min: 0, max: 8 },
  //   blurSharpness: { value: 0.5, min: 0, max: 1 },
  //   rayStep: { value: 0.3, min: 0, max: 1 },
  //   intensity: { value: 1, min: 0, max: 5 },
  //   maxRoughness: { value: 0.1, min: 0, max: 1 },
  //   jitter: { value: 0.7, min: 0, max: 5 },
  //   jitterSpread: { value: 0.45, min: 0, max: 1 },
  //   jitterRough: { value: 0.1, min: 0, max: 1 },
  //   roughnessFadeOut: { value: 1, min: 0, max: 1 },
  //   rayFadeOut: { value: 0, min: 0, max: 1 },
  //   MAX_STEPS: { value: 20, min: 0, max: 20 },
  //   NUM_BINARY_SEARCH_STEPS: { value: 5, min: 0, max: 10 },
  //   maxDepthDifference: { value: 3, min: 0, max: 10 },
  //   maxDepth: { value: 1, min: 0, max: 1 },
  //   thickness: { value: 10, min: 0, max: 10 },
  //   ior: { value: 1.45, min: 0, max: 2 },
  // });

  const drunkProps = useControls("Drunk Effect", {
    frequency: { value: 2, min: 1, max: 20 },
    amplitude: { value: 0.1, min: 0, max: 1 },
  });

  const drunkRef = useRef();

  return (
    <>
      <EffectComposer multisampling={4}>
        {/* 
        <Vignette
          offset={0.3}
          darkness={0.9}
          blendFunction={BlendFunction.NORMAL}
        />

        <Glitch
          delay={[0.5, 1]}
          duration={[0.1, 0.3]}
          strength={[0.2, 0.4]}
          mode={GlitchMode.CONSTANT_WILD}
        />

        <Noise premultiply blendFunction={BlendFunction.OVERLAY} />

        <Bloom mipmapBlur intensity={0.5} luminanceThreshold={0} />

        <DepthOfField
          focusDistance={0.025}
          focalLength={0.025}
          bokehScale={6}
        />

        <SSR {...ssrProps} /> */}
        <Drunk ref={drunkRef} {...drunkProps} blendFunction={BlendFunction.DARKEN} />
      </EffectComposer>
    </>
  );
}
