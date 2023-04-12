import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const ProductPreview = ({ product }) => {
  return (
    <div className="product-preview">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="product-preview-bottom">
        <span className="product-preview-price">${product.prices}</span>
        <button className="product-preview-button">
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPreview;
