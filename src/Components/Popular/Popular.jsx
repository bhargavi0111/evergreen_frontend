import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Popular.css";
import Item from "../Item/Item";

const Popular = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/allproducts");
        const allProducts = response.data;
        const getRandomProducts = (products, num) => {
          const shuffled = products.sort(() => 0.5 - Math.random());
          return shuffled.slice(0, num);
        };

        setProducts(allProducts);
        setDisplayProducts(getRandomProducts(allProducts, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="popular">
      <h1>BEST SELLER</h1>
      <hr />
      <div className="popular-item">
        {displayProducts.map((item) => (
          <Item
            key={item._id}
            id={item._id}
            name={item.name}
            image={`http://localhost:4000${item.image}`}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
