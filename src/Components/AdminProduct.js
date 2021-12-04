import React from "react";

export default function AdminProduct({ product }) {
  console.log("adminproduct:", product.name);

  const handleDeleteProduct = (id) => {
    console.log("deleting...", id);
  };

  return (
    <div className="admin-product">
      <img className="admin-product__coverImg" src={product.coverPhotoURL} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>{product.price}</span>
      <button>Edit</button>
      <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
    </div>
  );
}
