import React from 'react'
import { useState, useEffect, useMemo } from 'react';

const Codebar = () => {

    const promoData = useMemo(() => [    'Get 10% Off - Use Coupon Code HAPPY123',    'Free Shipping Over $50'  ], []);

    const [promoText, setpromoText] = useState(promoData[0]);
    const [index, setIndex] = useState(0);

    
  
    useEffect(() => {
      const interval = setInterval(() => {
        setpromoText(promoData[index]);
        setIndex(index => (index + 1) % promoData.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, [promoData.length, index]);
  
    useEffect(() => {
      const promoElement = document.getElementById('promo');
      promoElement.classList.add('fade');
      setTimeout(() => {
        setpromoText(promoData[index]);
        promoElement.classList.remove('fade');
      }, 100);
    }, [promoData, index]);
  
    return (
        <header>
            <div id="promo">
                {promoText}
            </div>
            <div id='bg'> </div>
        </header>
    );
  };

export default Codebar
