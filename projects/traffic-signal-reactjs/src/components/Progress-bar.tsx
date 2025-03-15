import { useEffect, useRef, useState } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const timerInterval = useRef<number>(0);

  return (
    <div className="progress-bar">
      <span className="color_filled" style={{ width: progress + "%" }}>
        {progress + "%"}
      </span>
    </div>
  );
};
