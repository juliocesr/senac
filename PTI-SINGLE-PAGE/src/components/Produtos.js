import React from 'react';
import './Cards.css'

const ProductCard = ({ product, addToCart }) => {
  const handleClick = () => {
    addToCart(product);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className='footer'>
        <span>{product.price}</span>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

export default ProductCard;
