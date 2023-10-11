import React, { useState } from "react";
import "./Product.css";
import ProductDetail from "./ProductDetail";

const Product = ({ img1, img2, img3, content1, content2, content3, id }) => {
  const [popup, setPopup] = useState(false);
  const viewDetailHandle = (e) => {
    setPopup(true);
  };

  return (
    <div className="">
      <div className="" key={id}>
        <div className="product-img">
          <img src={img1} alt="id" />
        </div>
        <div className="product-detail pt-2 px-2">
          <div className="d-flex justify-content-between">
            <p className="m-0">{content1}</p>
            <p className="text-muted fs-4 m-0">{content2}</p>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <button
              className="btn btn-sm btn-danger"
              onClick={viewDetailHandle}
            >
              View Details
            </button>
            <button
              className="btn btn-sm btn-outline-danger cart-btn"
              onClick={viewDetailHandle}
            >
              Add to cart
            </button>
          </div>
        </div>
        <ProductDetail
          trigger={popup}
          setTrigger={setPopup}
          img1={img1}
          img2={img2}
          img3={img3}
          id={id}
          productName={content1}
          productPrice={content2}
          productDesc={content3}
        />
      </div>
    </div>
  );
};

export default Product;
