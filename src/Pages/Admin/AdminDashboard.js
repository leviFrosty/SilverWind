import React, { useEffect } from "react";

export default function AdminDashboard() {
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
    </div>
  );
}
