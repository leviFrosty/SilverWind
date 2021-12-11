import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../fbInstance";
import ProductCard from "../../Components/ProductCard";

export default function CategoryProducts({ category }) {
  const [products, setproducts] = useState([]);

  useEffect(async () => {
    const q = query(
      collection(db, "products"),
      where("category", "==", `${category}`)
    );
    const querySnapshot = await getDocs(q);
    let list = [];
    querySnapshot.forEach((doc) => list.push(doc.data()));
    setproducts(list);
    return () => setproducts([]);
  }, [category]);

  const title = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="category">
      <div className="category-title">
        <h1>{title}</h1>
        <p>by Julia</p>
      </div>
      <div className="category-products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
