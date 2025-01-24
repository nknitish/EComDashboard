import React from "react";

const Rating = ({ rating = 0, maxStar = 5 }) => {
  const stars = Array(maxStar)
    .fill()
    .map((_, i) => i + 1);
  return (
    <div className="flex items-center">
      {stars.map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          fill={star <= rating ? "gold" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="gold"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499c.53-1.164 2.115-1.164 2.646 0l2.105 4.608a1.5 1.5 0 001.166.875l5.036.697c1.258.174 1.762 1.755.85 2.65l-3.64 3.566a1.5 1.5 0 00-.433 1.325l.857 4.995c.214 1.248-1.096 2.195-2.214 1.61l-4.507-2.37a1.5 1.5 0 00-1.396 0l-4.507 2.37c-1.118.585-2.428-.362-2.214-1.61l.857-4.995a1.5 1.5 0 00-.433-1.325l-3.64-3.566c-.912-.895-.408-2.476.85-2.65l5.036-.697a1.5 1.5 0 001.166-.875l2.105-4.608z"
          />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
