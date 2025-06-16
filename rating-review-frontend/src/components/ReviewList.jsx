import React from "react";

function ReviewList({ reviews }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h4>All Reviews:</h4>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((r) => (
            <li key={r.id} style={{ marginBottom: "15px" }}>
              <strong>Rating:</strong> {r.rating || "—"} <br />
              <strong>Review:</strong> {r.review_text || "—"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReviewList;
