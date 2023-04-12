import React from 'react';
import { useState, useEffect } from 'react';
import './ShopCollection.css'
import products from "../data/products.jsx";
import Dropdown from "../component/Dropdown";
import ProductPreview from "../component/ProductPreview";

const ShopCollection = () => {

  useEffect(() => {
    document.title = 'Shop Collection | happy kids';
}, []); 

  const [selectedCollection, setSelectedCollection] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");

  const filterProducts = () => {
    return products.filter((product) => {
      let matched = true;
      if (selectedCollection !== "All" && product.collection !== selectedCollection) {
        matched = false;
      }
      if (selectedPrice !== "All" && Array.isArray(product.prices) && !product.prices.includes(selectedPrice)) {
        matched = false;
      }
      if (selectedSize !== "All" && !product.sizes.includes(selectedSize)) {
        matched = false;
      }
      if (selectedColor !== "All" && !product.colors.includes(selectedColor)) {
        matched = false;
      }
      return matched;
    });
  };
  

  const handleCollectionChange = (event) => {
    setSelectedCollection(event.target.value);
  };
  
  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const filteredProducts = filterProducts();

  return (
    <div className="product-grid">
      <div className="filter">
      <Dropdown
  collections={["All", "T shirts", "Bodysuits"]}
  prices={["All", 19.99, 29.99, 39.99]}
  sizes={["All", "0-3 months", "12-18 months", "18-24 months", "2 years", "3 years", "3-6 months", "6-12 months"]}
  colors={["All", "Blue", "Cream", "Green", "Light Pink", "Peach", "Terracota", "White"]}
  onChange={(event) => {
    switch (event.target.name) {
      case "collection":
        handleCollectionChange(event);
        break;
      case "price":
        handlePriceChange(event);
        break;
      case "size":
        handleSizeChange(event);
        break;
      case "color":
        handleColorChange(event);
        break;
      default:
        break;
    }
  }}
/>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductPreview key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopCollection;