import React, { useState, useEffect } from "react";
import FallingButton from "./buttons";

const colorPalette = ["#CB9BFA", "#FF7C7C", "#70DDB2", "#F8FD91", "#C1D738"];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[randomIndex];
};

const FallingButtons = () => {
  const [buttonConfigs, setButtonConfigs] = useState([]);
  const [buttonIndex, setButtonIndex] = useState(0);

  const generateButtonConfig = (index) => {
    if (index >= 30) {
      return; // Stop generating buttons once we have 30
    }

    const angle = Math.floor(Math.random() * 360);
    const initialY = -1000 - Math.random() * 1000;
    const initialX = Math.random() * (window.innerWidth - 100); // Adjusted to prevent buttons from going off-screen
    const color = getRandomColor();

    // Check if the new button overlaps with existing buttons
    const overlap = buttonConfigs.some((button) => {
      const distance = Math.sqrt(
        Math.pow(initialX - button.initialX, 2) +
          Math.pow(initialY - button.initialY, 2)
      );
      return distance < 100; // Adjust this value to control spacing
    });

    if (!overlap) {
      const newButtonConfig = { angle, initialX, initialY, color };
      setButtonConfigs((prevConfigs) => [...prevConfigs, newButtonConfig]);
      setButtonIndex(index + 1);
    }

    // Generate the next button after a delay
    setTimeout(() => generateButtonConfig(index + 1), 200);
  };

  useEffect(() => {
    generateButtonConfig(0);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "93vw",
        height: "108vh",
        overflow: "hidden",
        marginTop: "-1400px",
      }}
    >
      {buttonConfigs.map((config, index) => (
        <FallingButton
          key={index}
          angle={config.angle}
          initialX={config.initialX}
          initialY={config.initialY}
          color={config.color}
          diameter={100} // Adjust this value to control button size
        />
      ))}
    </div>
  );
};

export default FallingButtons;
