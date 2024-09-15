import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img
          src={
            image.startsWith("http") ? image : `http://localhost:4000${image}`
          }
          alt={name}
        />
        <p>{name}</p>
        <div className="item-prices">
          <div className="item-price-new">₹{new_price}</div>
          <div className="item-price-old">₹{old_price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
