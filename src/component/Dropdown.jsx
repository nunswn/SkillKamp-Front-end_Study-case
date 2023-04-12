import React from 'react'

const Dropdown = ({ collections, prices, sizes, colors, onChange }) => {
  return (
    <div className="dropdown">
      <select name="collection" onChange={onChange}>
        {collections.map((collection) => (
          <option key={collection} value={collection}>
            {collection}
          </option>
        ))}
      </select>
      <select name="price" onChange={onChange}>
        {prices.map((price) => (
          <option key={price} value={price}>
            {price}
          </option>
        ))}
      </select>
      <select name="size" onChange={onChange}>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <select name="color" onChange={onChange}>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

