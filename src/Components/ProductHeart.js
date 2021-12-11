import React from "react";
import { ReactComponent as HeartEmpty } from "../Images/heart-empty.svg";
import { ReactComponent as HeartFull } from "../Images/heart-solid.svg";

export default function ProductHeart(id) {
  return (
    <div className="product-heart-container">
      <HeartEmpty className="product-heart" />
    </div>
  );
}
