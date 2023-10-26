uniform vec3 uDeptColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

varying float vElevation;

void main(){
  float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
  vec3 color = mix(uDeptColor, uSurfaceColor, mixStrength);

  gl_FragColor = vec4(color,1.0);
}