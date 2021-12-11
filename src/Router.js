import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactComponent as BlobStart } from "./Images/blobsStart.svg";
import { ReactComponent as BlobEnd } from "./Images/blobsEnd.svg";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Nav from "./Components/Nav";
import Register from "./Pages/Profile/Register";
import Login from "./Pages/Profile/Login";
import NotFound from "./Pages/NotFound";
import CustomForm from "./Pages/CustomForm";
import AboutMe from "./Pages/AboutMe";
import Categories from "./Pages/Products/Categories";
import AddProduct from "./Components/AddProduct";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/Profile/EditProfile";
import RequireAdmin from "./Pages/Admin/RequireAdmin";
import Portfolio from "./Pages/Portfolio";
import LikedProducts from "./Pages/LikedProducts";
import Cart from "./Pages/Cart";
import Welcome from "./Pages/Welcome";
import Forgot from "./Pages/Profile/Forgot";
import ForgotSubmitted from "./Pages/Profile/ForgotSubmitted";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import CategoryProducts from "./Pages/Products/CategoryProducts";
import Product from "./Pages/Products/Product";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Nav />
      <section className="main">
        <BlobStart className="blobStart" alt="" />
        <Routes>
          {/* Nav */}
          <Route index element={<HomePage />} />
          <Route path="order-custom" element={<CustomForm />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about-me" element={<AboutMe />} />
          {/* End Nav */}

          {/* Profile Routes */}
          <Route path="profile" element={<Profile />}>
            <Route path="edit" element={<EditProfile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="likes" element={<LikedProducts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="forgot/submitted" element={<ForgotSubmitted />} />
          {/* Profile Routes End */}

          {/* Admin */}
          <Route path="admin" element={<RequireAdmin />}>
            <Route path="dashboard" element={<AdminDashboard />}>
              <Route path="add" element={<AddProduct />} />
            </Route>
          </Route>
          {/* End Admin */}

          {/* Products */}
          <Route path="products" element={<Categories />} />

          <Route path="rings" element={<CategoryProducts category="rings" />}>
            <Route path=":productID" element={<Product />} />
          </Route>

          <Route
            path="earrings"
            element={<CategoryProducts category="earrings" />}
          >
            <Route path=":productID" element={<Product />} />
          </Route>

          <Route
            path="necklaces"
            element={<CategoryProducts category="necklaces" />}
          >
            <Route path=":productID" element={<Product />} />
          </Route>

          <Route
            path="bracelets"
            element={<CategoryProducts category="bracelets" />}
          >
            <Route path=":productID" element={<Product />} />
          </Route>
          {/* End Products */}

          <Route path="*" element={<NotFound />} />
        </Routes>
        <BlobEnd className="blobEnd" alt="" />
      </section>
      <Footer />
    </BrowserRouter>
  );
}
