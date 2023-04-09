import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { useState } from "react";

const StickySocial = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={isVisible ? "sticky-social" : "sticky-social hidden"}>
      <a href="#facebook">
        <FaFacebook  style={{ color: "black" }}/>
      </a>
      <a href="#instagram">
        <FaInstagram  style={{ color: "black" }}/>
      </a>
      <a href="#pinterest">
        <FaPinterest  style={{ color: "black" }}/>
      </a>
      <button onClick={handleToggleVisibility}>Close</button>
    </div>
  );
};

export default StickySocial;

