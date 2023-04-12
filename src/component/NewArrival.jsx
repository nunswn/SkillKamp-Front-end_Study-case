import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import products from "../data/products";

const ProductPreview = () => {

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToPrevProduct = () => {
    const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextProduct = () => {
    const newIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="product-preview">
      <div className="product-preview-heading">
        <h2>New Arrivals</h2>
      </div>
      <div className="product-preview-items">
        
      <div className="product-preview-buttons">
          <button className="left" onClick={goToPrevProduct}>
            <FaChevronLeft />
          </button>
          <button className="right" onClick={goToNextProduct}>
            <FaChevronRight />
          </button>
        </div>
        {products.map((product, index) => (
          <div
            key={index}
            className={`product-preview-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={product.image} alt={product.name} />
            
            <div className="product-preview-details">
              <h3>{product.name}</h3>
              <p>${product.prices}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPreview;
