import React, { useState } from "react";
import axios from "axios";
import StarRatingInput from "./StarRatingInput";

function ReviewForm({ productId, onReviewSubmitted }) {
  const [rating, setRating] = useState(0);
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
        userId: 1, 
        rating,
        reviewText: review
      });
      setRating(0);
      setReview("");
      setError("");
      onReviewSubmitted();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit review.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h4>Submit a Review:</h4>
      <label>Rating: </label>
      <span className="star-rating-input">
        <StarRatingInput value={rating} onChange={setRating} />
      </span>
      <label>Review: </label>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} rows={3} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;