import './App.css';
import React, { useState } from 'react'
import ProductCard from './components/Produtos'
import CartModal from './components/CarrinhoModal';
import Cart from './components/Carrinho';
import img1 from './components/img/img1.jpg'
import img2 from './components/img/img2.jpg'
import img3 from './components/img/img3.jpg'

function App() {
  const [cart, setCart] = useState([]); 
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const openModal = () => {
    setShowModal(true); 
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  const deleteItem = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index); 
    setCart(updatedCart);
  };

  const products = [
    {
      name: 'Produto 1',
      image: img1,
      description: 'Descrição do produto 1',
      price: '$19.99',
    },
    {
      name: 'Produto 2',
      image: img2,
      description: 'Descrição do produto 2',
      price: '$19.99',
    },
  ];

  return (
    <div className="App">
      <Cart cart={cart} onClick={openModal} />
      {showModal && <CartModal cart={cart} onClose={closeModal} />}
      <div className='products'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} onDelete={deleteItem}/>
        ))}
      </div>
    </div>
  );
}

export default App;
