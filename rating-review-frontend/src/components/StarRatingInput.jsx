import React, { useState } from "react";

export default function StarRatingInput({ value, onChange, max = 5, size = 28 }) {
  const [hovered, setHovered] = useState(0);

  
  return (
    <div style={{ display: "inline-flex", gap: 2, cursor: "pointer" }}>
      {Array.from({ length: max }, (_, i) => (

        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < (hovered || value) ? "#fbbf24" : "#e5e7eb"}
          stroke="#fbbf24"
          strokeWidth="1"
          style={{ transition: "fill 0.2s" }}
          onClick={() => onChange(i + 1)}
          onMouseEnter={() => setHovered(i + 1)}
          onMouseLeave={() => setHovered(0)}
        >
          <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
        </svg>
      ))}
    </div>
  );
}