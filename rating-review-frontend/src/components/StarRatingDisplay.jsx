import React from "react";

export default function StarRatingDisplay({ value = 0, max = 5, size = 22 }) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    stars.push(
      <svg
        key={i}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={i <= value ? "#fbbf24" : "#e5e7eb"}
        stroke="#fbbf24"
        strokeWidth="1"
        style={{ marginRight: 2, verticalAlign: "middle" }}
      >
        <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
      </svg>
    );
  }
  return <span>{stars}</span>;
}