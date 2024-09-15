import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  if (!product) {
    return <div className="breadcrum">Product information not available.</div>;
  }

  return (
    <div className="breadcrum">
      <Link to={`/${product.category}`} className="breadcrum-link">
        {product.category}
      </Link>
      <img src={arrow_icon} alt="Arrow icon" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
