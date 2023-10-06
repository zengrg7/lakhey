import React from "react";
import { Navbar, Footer, Header, Products } from "../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <h4 className="header-title text-danger">Our Feature Product</h4>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
