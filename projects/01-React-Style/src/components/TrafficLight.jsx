import { useState, useEffect } from "react";

const TrafficLight = ({ initialColor = "green", config }) => {
  const [currentColor, setCurrentColor] = useState(initialColor);

  useEffect(() => {
    const { duration, next } = config[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className="traffic-light-container">
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          backgroundColor={
            color === currentColor
              ? config[currentColor].backgroundColor
              : undefined
          }
        />
      ))}
    </div>
  );
};

const Light = ({ backgroundColor }) => {
  return (
    <div
      aria-hidden={true}
      className="traffic-light"
      style={{ backgroundColor }}
    />
  );
};

export default TrafficLight;
