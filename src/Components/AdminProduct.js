import { deleteObject, ref } from "@firebase/storage";
import React from "react";
import { storage } from "../fbInstance";

export default function AdminProduct({ product }) {
  // TODO: Add admin product editing
  // TOOD: add product delete with storage/ product doc cleanup
  const handleDeleteProduct = async () => {
    // await deleteObject(ref(storage, attachmentURL));
    product.otherImagesURLs.foreach(async (url) => {
      await deleteObject(ref(storage, url))
        .then(() => console.log("product deleted:", url))
        .catch((e) => console.log(e));
    });
  };

  return (
    <div className="admin-product">
      <img className="admin-product__coverImg" src={product.coverPhotoURL} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>{product.price}</span>
      <span>{product.quantity}</span>
      <button>Edit</button>
      <button onClick={() => handleDeleteProduct}>Delete</button>
    </div>
  );
}
