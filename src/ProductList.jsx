import React from 'react';

function ProductList(){
  const products = [
    { id: 1, name: "Camera", price: 200 },
    { id: 2, name: "speakers", price: 400 },
    { id: 3, name: "headphone", price: 300 },

  ];
  return(
    <div style={{textAlign:'center', marginTop:'40px'}}>
      <h1 class="ml-16"  >Product list</h1>
      {products.length > 0 ? (
      products.map((product) => (
        <div key={product.id} style={{marginBottom: '20px'}}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>  

    </div>
  ))
  ) : (
    <p>No products available</p>
  )}
    </div>
  );   
}

export default ProductList;
