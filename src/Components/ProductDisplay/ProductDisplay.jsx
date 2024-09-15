import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCart } from "../../redux/actions/cartActions";
import "./ProductDisplay.css";

const ProductDisplay = ({ product }) => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (!product || !product._id) {
      console.error("Invalid product:", product);
      return;
    }

    setIsAdding(true);
    try {
      await dispatch(addToCart(product._id));
      dispatch(getCart());
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const imageUrl = product.image.startsWith("/")
    ? `http://localhost:4000${product.image}`
    : product.image;

  const categoryTags = {
    plants: ["Lesswater", "Low light", "Indoor", "Air purifier"],
    pots: ["Ceramic", "Terracotta", "Plastic", "Decorative"],
    tools: ["Gardening", "Pruning", "Watering", "Hand tools"],
    gifts: ["Birthday", "Housewarming", "Anniversary", "Personalized"],
  };

  const productTags = categoryTags[product.category] || [];
  const randomRating = product.rating || Math.floor(Math.random() * 5) + 3;

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          {product.images &&
            product.images.map((img, index) => (
              <img
                key={index}
                src={img.startsWith("/") ? `http://localhost:4000${img}` : img}
                alt={`Product ${index}`}
                className="product-display-thumbnail"
              />
            ))}
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={imageUrl}
            alt={product.name}
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1 className="product-display-name">{product.name}</h1>
        {product.category === "plants" && (
          <div className="product-display-plant-details">
            <p>
              <strong>Watering Needs:</strong> Less Water
            </p>
            <p>
              <strong>Sunlight:</strong> Low light
            </p>
          </div>
        )}
        <div className="product-display-stars">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={index < randomRating ? "star filled" : "star"}
              aria-label={`Star rating ${index + 1}`}
            >
              ★
            </span>
          ))}
        </div>
        <div className="product-display-prices">
          <div className="product-display-price-old">
            ₹{product.old_price.toFixed(2)}
          </div>
          <div className="product-display-price-new">
            ₹{product.new_price.toFixed(2)}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
        <p className="product-display-category">
          <span>Category:</span> {product.category}
        </p>

        <p className="product-display-tags">
          <span>Tags:</span> {productTags.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
