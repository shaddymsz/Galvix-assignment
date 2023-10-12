import React from "react";
import { useSpring, animated } from "react-spring";

const FallingButton = ({ angle, initialX, initialY, color }) => {
  const buttonAnimation = useSpring({
    to: {
      transform: `translate(${initialX}px, ${window.innerHeight}px) rotate(${angle}deg)`,
      backgroundColor: color,
      borderRadius: "26px",
    },
    from: {
      transform: `translate(${initialX}px, ${initialY}px) rotate(${angle}deg)`,
      backgroundColor: color,
      borderRadius: "26px",
    },
    config: { mass: 10, tension: 60, friction: 30 },
  });

  return (
    <animated.button
      style={{
        transform: buttonAnimation.transform,
        backgroundColor: buttonAnimation.backgroundColor,
        position: "absolute",
        color: "black",
        padding: "10px 20px",
        border: "none",
        borderRadius: "26px",
        color: "#000",
        fontFamily: "Inter",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
      }}
    >
      Sample Test
    </animated.button>
  );
};

export default FallingButton;
