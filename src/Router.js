import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactComponent as BlobStart } from "./Images/blobsStart.svg";
import { ReactComponent as BlobEnd } from "./Images/blobsEnd.svg";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Nav from "./Components/Nav";
import Register from "./Pages/Register";
import Login from "./Pages/Profile/Login";
import Rings from "./Pages/Products/Rings";
import Product from "./Pages/Products/Product";
import Earrings from "./Pages/Products/Earrings";
import Necklaces from "./Pages/Products/Necklaces";
import NotFound from "./Pages/NotFound";
import CustomForm from "./Pages/CustomForm";
import Bracelets from "./Pages/Products/Bracelets";
import AboutMe from "./Pages/AboutMe";
import Categories from "./Pages/Products/Categories";
import AddProduct from "./Pages/Admin/AddProduct";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/Profile/EditProfile";
import RequireAdmin from "./Pages/Admin/RequireAdmin";
import Portfolio from "./Pages/Portfolio";
import LikedProducts from "./Pages/LikedProducts";
import Cart from "./Pages/Cart";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Nav />
      <section className="main">
        <BlobStart className="blobStart" alt="" />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />}>
            <Route path="edit" element={<EditProfile />} />
          </Route>
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="likes" element={<LikedProducts />} />
          <Route path="order-custom" element={<CustomForm />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="cart" element={<Cart />} />

          {/* Admin */}
          <Route path="admin" element={<RequireAdmin />}>
            <Route path="add-product" element={<AddProduct />} />
          </Route>
          {/* End Admin */}

          {/* Products */}
          <Route path="products" element={<Categories />} />

          <Route path="rings" element={<Rings />}>
            <Route path=":productID" element={<Product />} />
          </Route>

          <Route path="earrings" element={<Earrings />}>
            <Route path=":productID" element={<Product />} />
          </Route>

          <Route path="necklaces" element={<Necklaces />}>
            <Route path=":productID" element={<Product />} />
          </Route>

          <Route path="bracelets" element={<Bracelets />}>
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
