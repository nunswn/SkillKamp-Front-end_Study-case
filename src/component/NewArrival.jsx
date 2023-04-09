import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductPreview = () => {
  const products = [
    { name: "Product 1", image: '/images/product1.png', price: 19.99 },
    { name: "Product 2", image: '/images/product2.png', price: 29.99 },
    { name: "Product 3", image: '/images/product3.png', price: 39.99 },
    { name: "Product 4", image: '/images/product4.png', price: 39.99 },
    { name: "Product 5", image: '/images/product5.png', price: 39.99 },
    { name: "Product 6", image: '/images/product6.png', price: 39.99 },
    { name: "Product 7", image: '/images/product7.png', price: 39.99 },
    { name: "Product 8", image: '/images/product8.png', price: 39.99 },
    { name: "Product 9", image: '/images/product9.png', price: 39.99 },
    { name: "Product 10", image: '/images/product10.png', price: 39.99 },
    { name: "Product 11", image: '/images/product11.png', price: 39.99 },
    { name: "Product 12", image: '/images/product12.png', price: 39.99 },
  ];

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
              <p>${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPreview;
