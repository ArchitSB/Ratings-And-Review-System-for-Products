import React, { useState } from "react";
import axios from "axios";

function ReviewForm({ productId, onReviewSubmitted }) {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating && !review) {
      setError("Please provide at least a rating or a review.");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/reviews", {
        productId,
        userId: 1, // For now hardcoding the user
        rating,
        reviewText: review
      });
      setRating("");
      setReview("");
      setError("");
      onReviewSubmitted();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit review.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h4>Submit a Review:</h4>
      <label>Rating (1-5): </label>
      <input type="number" min="1" max="5" value={rating}
             onChange={(e) => setRating(e.target.value)} />
      <br />
      <label>Review: </label>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
