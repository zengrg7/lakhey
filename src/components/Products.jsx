import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Product.css";
import data from "./productData";
import Product from "./Product";
const Products = () => {
  const [shopData] = useState(data);

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <Row className="gap-4 flex-wrap d-flex">
        {shopData.map((item) => {
          const { id, image, content1, content2, content3, image2, image3 } =
            item;
          return (
            <Col xs="auto">
              <div className="product-container pb-3" key={id}>
                <Product
                  img1={image}
                  img2={image2}
                  img3={image3}
                  content1={content1}
                  content2={content2}
                  content3={content3}
                  id={id}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Products;
