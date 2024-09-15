import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { fetchProductsByCategory } from "../redux/actions/shopActions";

const ShopCategory = (props) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const { products, loading, error } = useSelector((state) => state.shop);

  useEffect(() => {
    if (props.category) {
      dispatch(fetchProductsByCategory(props.category));
    }
  }, [dispatch, props.category]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="shop-category">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <img
        className="shopcategory-banner"
        src={props.banner}
        alt="Category Banner"
      />

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      <div className="shopcategory-products">
        {filteredProducts.length > 0
          ? filteredProducts.map((item) => (
              <Item
                key={item._id}
                id={item._id}
                name={item.name}
                image={`http://localhost:4000${item.image}`}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))
          : !loading && <p>No products available</p>}
      </div>
    </div>
  );
};

export default ShopCategory;
