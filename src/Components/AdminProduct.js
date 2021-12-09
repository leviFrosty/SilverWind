import { deleteDoc, doc, getDoc } from "@firebase/firestore";
import { deleteObject, ref } from "@firebase/storage";
import React from "react";
import { db, storage } from "../fbInstance";

export default function AdminProduct({ product }) {
  // TODO: Add admin product editing
  // TOOD: add product delete with storage/ product doc cleanup
  const handleDeleteProduct = async () => {
    if (
      window.confirm(`Are you sure you want to delete ${product.name}?`) != true
    ) {
      return;
    }
    await deleteDoc(doc(db, "products", product.id)).catch((e) =>
      console.log(e)
    );
    await deleteObject(ref(storage, product.coverPhotoURL));
    const images = Object.values(product.otherImagesURLs);
    images.forEach(async (url) => {
      await deleteObject(ref(storage, url))
        .then(() => console.log("product deleted:", url))
        .catch((e) => console.log(e));
    });
  };

  return (
    <div className="admin-product">
      <div className="admin-product-start">
        <img className="admin-product__coverImg" src={product.coverPhotoURL} />
        <h2 className="admin-product-title">{product.name}</h2>
      </div>
      <div className="admin-product-middle">
        <p className="admin-product-description">{product.description}</p>
      </div>
      <div className="admin-product-end">
        <span className="admin-product-price">{product.price}</span>
        <span className="admin-product-quantity">{product.quantity}</span>
        <button className="button-secondary-outline clickable">Edit</button>
        <button
          className="button-secondary clickable"
          onClick={handleDeleteProduct}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
