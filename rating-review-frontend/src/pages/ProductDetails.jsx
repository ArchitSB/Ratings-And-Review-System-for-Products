import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [summary, setSummary] = useState({});
  const [reviews, setReviews] = useState([]);

  const fetchReviews = () => {
    axios.get(`http://localhost:5000/api/products/${id}/reviews`)
      .then(res => setReviews(res.data));
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data));

    axios.get(`http://localhost:5000/api/products/${id}/summary`)
      .then(res => setSummary(res.data));

    fetchReviews();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img src={product.image_url} alt={product.name} style={{ width: "300px", height: "auto" }} />
      <p>{product.description}</p>

      <h3>Average Rating: {summary.avgRating || "Not rated yet"}</h3>

      <ReviewForm productId={id} onReviewSubmitted={fetchReviews} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default ProductDetails;
