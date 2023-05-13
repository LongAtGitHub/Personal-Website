import React from "react";
import Wave from "react-wavify";

interface WaveCProps {
  myColor: string;
}
function WaveC(props: WaveCProps) {
  const myColor = props.myColor;
  return (
    <Wave
      fill={myColor}
      paused={false}
      options={{
        height: 40,
        amplitude: 100,
        speed: 0.15,
        points: 3,
      }}
    />
  );
}

export default WaveC;
