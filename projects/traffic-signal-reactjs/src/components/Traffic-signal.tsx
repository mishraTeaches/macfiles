import { useEffect, useState } from "react";
import { Light } from "./Lights";

export default function TrafficLight({
  initialColor = "green",
  config,
  layout = "vertical",
}) {
  const [currentColor, setCurrentColor] = useState(initialColor);

  useEffect(() => {
    const { duration, next } = config[currentColor];
    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);
    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor, config]);

  return (
    <div
      className={[
        "traffic-light-container",
        layout === "vertical" && "traffic-light-container--vertical",
      ]
        .filter((val) => !!val)
        .join(" ")}
    >
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          backgroundColor={
            color === currentColor ? config[color].backgroundColor : undefined
          }
        />
      ))}
    </div>
  );
}
