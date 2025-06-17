import React from "react";
import StarRatingDisplay from "./StarRatingDisplay";

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      <h4>All Reviews:</h4>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <div>
          {reviews.map((r) => (
            <div key={r.id} style={{ marginBottom: "18px", borderBottom: "1px solid #e0e0e0", paddingBottom: "12px" }}>
              <div style={{ fontWeight: 500, marginBottom: 6 }}>
                {r.review_text || "—"}
              </div>
              <StarRatingDisplay value={r.rating || 0} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewList;