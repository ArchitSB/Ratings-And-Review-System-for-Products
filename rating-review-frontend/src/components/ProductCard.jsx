import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>{product.description.slice(0, 60)}...</p>
      <Link to={`/product/${product.id}`} className="view-btn">View & Review</Link>
    </div>
  );
}

export default ProductCard;