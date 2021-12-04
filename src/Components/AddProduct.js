import { addDoc, collection } from "@firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { db } from "../fbInstance";
import { v4 as uuidv4 } from "uuid";
import Spinner from "./Spinner";

export default function AddProduct() {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState(0);
  const [coverImage, setcoverImage] = useState("");
  const [processesing, setprocessing] = useState(false);
  const [otherImages, setotherImages] = useState([]);
  const [category, setcategory] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const {
      target: { value },
    } = e;
    setname(value);
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

  const handleCategoryChange = (e) => {
    const {
      target: { value },
    } = e;
    setcategory(value);
  };

  // const handleOtherImagesChange = (e) => {
  //   const {
  //     target: { files },
  //   } = e;
  //   setotherImages([...files]);
  // };

  const productData = {
    active: true,
    name,
    description,
    price,
    category,
    createdAt: Date.now(),
    id: uuidv4(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = collection(db, "products");
    addDoc(ref, productData);
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
        console.log(otherImages);
      };
      // reader.onprogress = (progress) => {
      //   setprocessing(true);
      // };
    });
    // TODO: Add image uploading and adding images to state
  };

  return (
    <div className="add-product">
      <div className="add-product__start">
        <h1>Add a product</h1>
        <button onClick={() => navigate(-1, { replace: true })}>Close</button>
      </div>
      <div className="add-product__end">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Name</label>
          <input
            type="text"
            id="title"
            required
            value={name}
            onChange={handleNameChange}
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
          {processesing && (
            <span>
              <Spinner />
            </span>
          )}
          <input
            type="file"
            id="coverImg"
            required
            onChange={handleCoverChange}
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

          <label htmlFor="otherImgs">Additional Images</label>
          <input
            type="file"
            id="otherImgs"
            multiple
            onChange={handleOtherImagesChange}
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            required
            value={price}
            onChange={handlePriceChange}
          />

          <input type="submit" value="MAKE THAT MONEY!" />
        </form>
      </div>
    </div>
  );
}
