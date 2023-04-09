import { useState } from 'react';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ['/images/Banner1.png', '/images/Banner2.png', '/images/Banner3.png'];

  const handleClick = (index) => {
    setCurrentImage(index);
  }


  return (
    <div className="banner">
      <img src={images[currentImage]} alt="banner" />
      <div className="dots">
        {images.map((image, index) => (
          <span
            key={index}
            className={currentImage === index ? "dot active" : "dot"}
            onClick={() => handleClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Banner;
