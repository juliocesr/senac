// CartModal.js
import React from 'react';
import './CarrinhoModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartModal = ({ cart, onClose, onDelete }) => {
    const handleDelete = (index) => {
        onDelete(index); 
    };

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Carrinho</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}> 
                {item.name} - {item.price}
                <button onClick={() => handleDelete(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CartModal;
