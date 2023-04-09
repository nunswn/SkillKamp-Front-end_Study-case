import React from 'react'
import { useEffect } from 'react';

function ShopCollection() {

  useEffect(() => {
    document.title = 'Shop Collection | happy kids';
  }, []);  

  return (
    <div>
      <h2>shop</h2>
    </div>
  )
}

export default ShopCollection
