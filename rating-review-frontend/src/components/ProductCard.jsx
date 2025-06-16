import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      width: "250px",
      textAlign: "center"
    }}>
      <img src={product.image_url} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h3>{product.name}</h3>
      <p>{product.description.slice(0, 60)}...</p>
      <Link to={`/product/${product.id}`}>View & Review</Link>
    </div>
  );
}

export default ProductCard;
