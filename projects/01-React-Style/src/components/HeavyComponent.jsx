import { memo } from "react";

const HeavyComponent = ({ value }) => {
  console.log("Heavy Component Rendered");
  // Simulate heavy calculations
  for (let i = 0; i < 1e8; i++) {}
  return <div>Heavy Component Value: {value}</div>;
};

export default HeavyComponent;
