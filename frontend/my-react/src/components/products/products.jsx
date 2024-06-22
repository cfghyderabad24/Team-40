// Products.js
import React, { useState } from 'react';
import BuyNowButton from '../BuyNowButton';
import image1 from './B2B Kit Image.png';
import image2 from './Coding Toy.png';
import image3 from './LifeSkills 360 Print.jpg'
import './Products.css'; // Ensure this file exists and is properly referenced


const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Coding Toy', image: image1, price: '29.99', description: 'This is a brief description of Product 1. It is a great product that provides value and quality.' },
    { id: 2, title: 'Pro game-Without comp', image: image2, price: '39.99', description: 'This is a brief description of Product 2. It is designed for efficiency and durability.' },
    { id: 3, title: 'Lifeskils 360', image: image3, price: '19.99', description: 'This is a brief description of Product 3. It offers exceptional features at an affordable price.' },
    { id: 4, title: 'Product 4', image: 'https://via.placeholder.com/150', price: '49.99', description: 'This is a brief description of Product 4. Known for its innovative design and functionality.' },
    { id: 5, title: 'Product 5', image: 'https://via.placeholder.com/150', price: '24.99', description: 'This is a brief description of Product 5. A reliable product that meets your everyday needs.' }
  ]);

  const handleBuyNow = (product) => {
    alert(`Buying ${product.title}`);
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-container">
            <img src={product.image} alt={product.title} className="product-image" />
          </div>
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <div className="product-price">Rs.{product.price}</div>
            <BuyNowButton onClick={() => handleBuyNow(product)} />
            <div className="product-description">{product.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
