import React, { useState } from "react";
import ProductHeart from "./ProductHeart";
import Spinner from "./Spinner";

export default function ProductCard({ product }) {
  const [loading, setloading] = useState(true);

  return (
    <div className="product-card">
      {product.coverPhotoURL !== null ? (
        <img src={product.coverPhotoURL} alt={product.name} />
      ) : (
        <div className="product-card__spinner">
          <Spinner />
        </div>
      )}
      <ProductHeart id={product.id} />
    </div>
  );
}
