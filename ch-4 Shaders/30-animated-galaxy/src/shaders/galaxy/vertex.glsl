uniform float uSize;
uniform float uTime;

attribute float aScale;
attribute vec3 aRandomness;

varying vec3 vColor;

void main(){
  // Position
  vec4 modelPosition = modelMatrix * vec4(position,1.0);

  // Spin
  float angle = atan(modelPosition.x, modelPosition.z);
  float distanceToCenter = length(modelPosition.xz);
  float angleOffset = (1.0/distanceToCenter)* uTime * 0.2;
  angle += angleOffset;
  modelPosition.x = cos(angle) * distanceToCenter;
  modelPosition.z = sin(angle) * distanceToCenter;

  //Randomness
  modelPosition.xyz += aRandomness;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionMatrix = projectionMatrix * viewPosition;
  gl_Position = projectionMatrix;

  //sizes 
  gl_PointSize = uSize * aScale;
  gl_PointSize *= ( 1.0 / - viewPosition.z );

  // Color
  vColor = color;
}