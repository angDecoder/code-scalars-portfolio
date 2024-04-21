import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Integration",
          "Full Stack Development",
          "Android Development",
          "iOS Development",
          "Cross Platform Development",
          "Desktop Application",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
        delay : 50
      }}
    />
  );
}

export default Type;
