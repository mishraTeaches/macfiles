import React, { useState } from "react";
import "../styles/StarRating.css"; // Optional for custom styling

const StarRating = ({ maxStars, initialRating, onRatingChange }) => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [currentRating, setCurrentRating] = useState(initialRating);

  const handleMouseEnter = (index) => {
    setHoveredStars(index + 1);
  };
  const handleMouseLeave = () => setHoveredStars(0);
  const handleClick = (index) => {
    const newRating = index + 1;
    setCurrentRating(newRating);
    if (onRatingChange) onRatingChange(newRating); // Callback for external usage
  };

  const renderStars = () => {
    return Array.from({ length: maxStars }, (_, index) => {
      const isFilled = index < (hoveredStars || currentRating);
      return (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`star-icon ${isFilled ? "star-icon-filled" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          style={{ cursor: "pointer", width: "24px", height: "24px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      );
    });
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
