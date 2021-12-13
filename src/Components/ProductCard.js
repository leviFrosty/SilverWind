import React, { useState } from "react";
import { useNavigate } from "react-router";
import ProductHeart from "./ProductHeart";
import Spinner from "./Spinner";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="product-card"
    >
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
