import { doc, getDoc, updateDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { db } from "../../fbInstance";
import { ReactComponent as TimesSolid } from "../../Images/times-solid.svg";
import { ReactComponent as CheckMark } from "../../Images/check-solid.svg";
import { ReactComponent as Hammer } from "../../Images/hammer-solid.svg";
import { ReactComponent as Ingots } from "../../Images/bars-hallow.svg";
import { ReactComponent as Plane } from "../../Images/plane-departure-solid.svg";
import { ReactComponent as Redo } from "../../Images/redo-solid.svg";
import { ReactComponent as Basket } from "../../Images/shopping-basket-solid.svg";
import { ReactComponent as Truck } from "../../Images/truck-solid.svg";
import { ReactComponent as Recycle } from "../../Images/recycle-solid.svg";

import Modal from "react-modal";
import { useSelector } from "react-redux";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState({});
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [quantityText, setquantityText] = useState("");
  const [product, setproduct] = useState({
    otherImagesURLs: [],
    coverPhotoURL: "",
  });
  let params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.userAuth);

  const handleAddToCart = () => {
    if (user.uid === undefined) {
      navigate("/login", {
        state: { redirectTo: location.pathname, productToAdd: product.id },
      });
    } else {
      console.log("add to cart button clicked");
      addToUserCart(product.id);
    }
  };

  const addToUserCart = async (id) => {
    console.log("adding to user cart");
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const currentCart = userDoc.data().cart;
    await updateDoc(doc(db, "users", user.uid), {
      cart: [{ id, quantity: 1 }, ...currentCart],
    });
  };

  useEffect(async () => {
    const docRef = await doc(db, "products", params.id);
    await getDoc(docRef).then((doc) => setproduct(doc.data()));
  }, []);

  useEffect(() => {
    setSelectedImage(product.coverPhotoURL);
    const quantityNumber = parseInt(product.quantity);
    if (quantityNumber > 5) {
      setquantityText(
        <>
          <CheckMark />
          <p>In stock</p>
        </>
      );
      return;
    }
    if (quantityNumber > 0 || quantityNumber <= 5) {
      setquantityText(
        <>
          <CheckMark />
          <p>{`${quantityNumber} left`}</p>
        </>
      );
    }
    if (quantityNumber == 0) {
      setquantityText(
        <>
          <TimesSolid />
          <Link to="/contact">Please contact us</Link>
          <p>Out of stock</p>
        </>
      );
    }
  }, [product]);

  return (
    <div className="product-details">
      <Modal
        style={{
          content: {
            display: "flex",
            overflow: "hidden",
            padding: "0px",
            alignItems: "center",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
      >
        <img src={selectedImage} alt="" className="modal-image" />
        <div
          className="modal-close"
          onClick={() => setmodalIsOpen(false)}
          alt="close modal"
        >
          <TimesSolid />
        </div>
      </Modal>
      <div className="category-title">
        <h1>{product.name}</h1>
        <p>by Julia</p>
      </div>
      <div className="product-main">
        <div className="product-start">
          <div className="preview" onClick={() => setmodalIsOpen(true)}>
            <img src={selectedImage} alt={product.name} />
          </div>
          <div className="preview-items">
            <img
              src={product.coverPhotoURL}
              style={{
                border:
                  selectedImage === product.coverPhotoURL
                    ? "4px solid #240066"
                    : "none",
              }}
              onClick={() => setSelectedImage(product.coverPhotoURL)}
            />
            {product.otherImagesURLs.map((img, index) => (
              <img
                style={{
                  border: selectedImage === img ? "4px solid #240066" : "none",
                }}
                onClick={() => setSelectedImage(img)}
                src={img}
                alt=""
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="product-end">
          <div className="product-numbers">
            <span className="product__price">{`$${product.price}`}</span>
            <span className="product__quantity">{quantityText}</span>
          </div>
          <div className="product-highlights">
            <span className="product__handmade">
              <Hammer />
              Handmade in Fort Thomas, KY USA
            </span>
            <span>
              <Ingots />
              {product.material}
            </span>
            <span>
              <Recycle />
              Sustainably Sourced Recycled Materials
            </span>
          </div>
          <div className="product-cta">
            <Link to="/return-policy">*Shipping and return policies</Link>
            <button
              onClick={handleAddToCart}
              className="button-secondary"
            >{`Add to cart`}</button>
          </div>
          <div className="product-logistics">
            <span>
              <Plane />
              Internation Shipping*
            </span>
            <span>
              <Redo />
              Returns Available
            </span>
            <span>
              <Basket />
              Free standard over $40
            </span>
            <span>
              <Truck />
              Free express over $120
            </span>
          </div>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
