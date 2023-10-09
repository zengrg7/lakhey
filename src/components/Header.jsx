import pink from "../assets/3.png";
import blue from "../assets/2.png";
import "./Header.css";
import Slider from "./Slider";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  const title = "Newly Arrived";
  return (
    <>
      <div className="header-container">
        <Slider />
      </div>
      <div className="header-container-trending w-100 p-0">
        <h4 className="mb-5 text-danger header-title text-center">{title}</h4>
        <Row className="d-flex pt-3">
          <Col className="p-0 left-image">
            <img src={pink} alt="pink" />
          </Col>
          <Col className="p-0 right-image">
            <img src={blue} alt="blue" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Header;
