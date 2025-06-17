import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";
import StarRatingDisplay from "../components/StarRatingDisplay";


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
     <div className="product-details-container">
      <h2>{product.name}</h2>
      <img src={product.image_url} alt={product.name} className="product-details-img" />
      <p>{product.description}</p>

      <div style={{ margin: "18px 0 24px 0", width: "100%", textAlign: "center" }}>
        <h3 style={{ marginBottom: 6 }}>
          Average Rating:{" "}
          {summary.avgRating
            ? <>
                <StarRatingDisplay value={Math.round(summary.avgRating)} />
                <span style={{ marginLeft: 8, color: "#fbbf24" }}>
                  {Number(summary.avgRating).toFixed(1)}
                </span>
              </>
            : "Not rated yet"}
        </h3>
        <hr style={{ border: "none", borderTop: "1.5px dashed #e5e7eb", margin: "18px 0 0 0" }} />
      </div>

      <ReviewForm productId={id} onReviewSubmitted={fetchReviews} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default ProductDetails;