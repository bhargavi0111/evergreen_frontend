import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewCollections.css";
import Item from "../Item/Item";

const NewCollections = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {displayProducts.map((item) => {
          // Adjust image URL to ensure proper formatting
          const imageUrl = `http://localhost:4000${item.image}`;

          return (
            <Item
              key={item._id}
              id={item._id}
              name={item.name}
              image={imageUrl}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
