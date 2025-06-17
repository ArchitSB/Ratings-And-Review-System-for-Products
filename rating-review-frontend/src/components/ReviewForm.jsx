import React, { useState } from "react";
import axios from "axios";
import StarRatingInput from "./StarRatingInput";

function ReviewForm({ productId, onReviewSubmitted }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating && !review) {
      setError("Please provide at least a rating or a review.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("productId", productId);
      formData.append("userId", 3); // Hardcoded user
      formData.append("rating", rating);
      formData.append("reviewText", review);
      if (photo) formData.append("photo", photo);

      await axios.post("http://localhost:5000/api/reviews", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setRating(0);
      setReview("");
      setPhoto(null);
      setError("");
      onReviewSubmitted();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit review.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form" encType="multipart/form-data">
      <h4>Submit a Review:</h4>
      <label>Rating: </label>
      <span className="star-rating-input">
        <StarRatingInput value={rating} onChange={setRating} />
      </span>
      <label>Review: </label>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} rows={3} />
      <label>Photo (optional):</label>
      <input
        type="file"
        accept="image/*"
        onChange={e => setPhoto(e.target.files[0])}
        style={{ margin: "8px 0 12px 0" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;