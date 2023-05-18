import React from "react";
import Wave from "react-wavify";
import { MyColors } from "../MyColors";


function WaveC() {
  return (
    <Wave 
      fill={MyColors.gray200}
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
