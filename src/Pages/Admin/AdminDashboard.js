import { collection, onSnapshot, query } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import AdminProduct from "../../Components/AdminProduct";
import { db } from "../../fbInstance";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "products"));
    const unSubscribe = onSnapshot(q, (snapshot) => {
      const productsList = [];
      snapshot.forEach((doc) => {
        productsList.push(doc.data());
      });
      setProducts(productsList);
    });
    return () => unSubscribe();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-start">
        <h1>Admin Dashboard</h1>
        <button
          className="clickable button-primary"
          onClick={() => navigate("add")}
        >
          Add Product
        </button>
      </div>
      <Outlet />
      <div className="admin-products">
        {products.map((product) => (
          <AdminProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
