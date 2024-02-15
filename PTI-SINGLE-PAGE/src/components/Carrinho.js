// Cart.js
import React from 'react';
import './Carrinho.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, onClick }) => {
  const itemCount = cart.length;

  return (
    <div className="cart">
      <button onClick={onClick}><FontAwesomeIcon size='2x' icon={faCartShopping} border={false} /></button>
      {itemCount > 0 && <p>{itemCount}</p>}
    </div>
  );
}

export default Cart;
