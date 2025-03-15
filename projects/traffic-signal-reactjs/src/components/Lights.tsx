import { LightProps } from "../types/light_type";

export const Light = ({ backgroundColor }: LightProps) => {
  return <div className="traffic-light" style={{ backgroundColor }}></div>;
};
