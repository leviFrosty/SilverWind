import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { db, storage } from "../fbInstance";
import { v4 as uuidv4 } from "uuid";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";

export default function AddProduct() {
  const [name, setname] = useState("");
  const [productID, setProductID] = useState("");
  const [material, setMaterial] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [coverImage, setcoverImage] = useState("");
  const [processesing, setprocessing] = useState(false);
  const [otherImages, setotherImages] = useState([]);
  const [category, setcategory] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.userAuth);

  const handleNameChange = (e) => {
    const {
      target: { value },
    } = e;
    setname(value);
  };
  const handleMaterialChange = (e) => {
    const {
      target: { value },
    } = e;
    setMaterial(value);
  };
  const handleDescriptionChange = (e) => {
    const {
      target: { value },
    } = e;
    setdescription(value);
  };
  const handlePriceChange = (e) => {
    const {
      target: { value },
    } = e;
    setprice(value);
  };
  const handleQuantityChange = (e) => {
    const {
      target: { value },
    } = e;
    setquantity(value);
  };

  const handleCategoryChange = (e) => {
    const {
      target: { value },
    } = e;
    setcategory(value);
  };

  const productData = {
    active: true,
    name,
    description,
    price,
    material,
    category,
    quantity,
    createdAt: Date.now(),
    id: productID,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setprocessing(true);
    const dbRef = doc(db, "products", productID);

    // Upload Cover Img
    const coverRef = await ref(
      storage,
      `products/${productData.name}-${uuidv4()}`
    );
    let coverPhotoURL = "";
    await uploadString(coverRef, coverImage, "data_url")
      .then(async () => (coverPhotoURL = await getDownloadURL(coverRef)))
      .catch((e) => console.log(e));

    let otherImagesURLs = [];
    for (const image of otherImages) {
      const imgRef = await ref(
        storage,
        `products/${productData.name}-${uuidv4()}`
      );
      await uploadString(imgRef, image, "data_url");
      const url = await getDownloadURL(imgRef);
      otherImagesURLs = [url, ...otherImagesURLs];
    }
    const newProductData = {
      coverPhotoURL,
      otherImagesURLs,
      ...productData,
    };
    setDoc(dbRef, newProductData)
      .catch((e) => console.log(e))
      .then(() => {
        setprocessing(false);
        handleClearInputs();
      });
  };

  const handleClearInputs = () => {
    const otherimgsInput = document.querySelector("#otherImgs");
    const coverimgInput = document.querySelector("#otherImgs");
    otherimgsInput.value = null;
    coverimgInput.value = null;
    setname("");
    setdescription("");
    setcoverImage("");
    setotherImages([]);
    setprice("");
    setcategory("");
    setquantity(0);
    setMaterial("");
  };

  const handleCoverChange = async (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        target: { result },
      } = finishedEvent;
      setcoverImage(result);
      setprocessing(false);
    };
    reader.onprogress = (progress) => {
      setprocessing(true);
    };
    reader.readAsDataURL(theFile);
  };

  const handleOtherImagesChange = async (event) => {
    const files = event.target.files;
    const filesArray = Object.values(files);
    let results = [];
    filesArray.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (finishedEvent) => {
        const {
          target: { result },
        } = finishedEvent;
        results.push(result);
        setprocessing(false);
      };
      reader.onprogress = () => {
        setprocessing(true);
      };
    });
    setotherImages(results);
  };

  useEffect(() => {
    setProductID(uuidv4());
  }, []);

  return (
    <div className="add-product">
      <div className="add-product-start">
        <h1 className="add-product__title">Add a product</h1>
        <button
          className="button-secondary-outline clickable"
          onClick={() => navigate("/admin/dashboard", { replace: true })}
        >
          Close
        </button>
        {processesing && (
          <span className="add-product__spinner">
            <Spinner />
          </span>
        )}
      </div>
      <div className="add-product-end">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Name</label>
          <input
            type="text"
            id="title"
            required
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="material">Material</label>
          <input
            type="text"
            id="material"
            required
            value={material}
            onChange={handleMaterialChange}
          />

          <label htmlFor="description">Description</label>
          <textarea
            type=""
            id="description"
            required
            value={description}
            onChange={handleDescriptionChange}
          />

          <label htmlFor="coverImg">Cover Image</label>

          <input
            type="file"
            id="coverImg"
            required
            onChange={handleCoverChange}
          />

          <label htmlFor="otherImgs">Additional Images</label>
          <input
            type="file"
            id="otherImgs"
            multiple
            onChange={handleOtherImagesChange}
          />

          <label htmlFor="category">Category</label>
          <select
            type=""
            id="category"
            required
            value={category}
            onChange={handleCategoryChange}
          >
            <option>-- Select Category -- </option>
            <option>necklaces</option>
            <option>rings</option>
            <option>earrings</option>
            <option>bracelets</option>
          </select>

          <label htmlFor="price">Price</label>
          <input
            type="number"
            step="0.01"
            id="price"
            required
            value={price}
            onChange={handlePriceChange}
          />
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            step="0.01"
            id="quantity"
            required
            value={quantity}
            onChange={handleQuantityChange}
          />

          <input
            type="submit"
            id="add-product__submit"
            className="button-secondary clickable"
            disabled={processesing ? true : false}
            value="MAKE THAT MONEY!"
          />
        </form>
      </div>
    </div>
  );
}
