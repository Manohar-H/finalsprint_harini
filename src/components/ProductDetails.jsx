import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';

const ProductDetailsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background-color: #f9f4f5;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 28px;
    color: #281826;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #555;
    margin: 10px 0;
  }

  .price {
    font-size: 24px;
    color: #70587c;
    font-weight: bold;
  }

  button {
    background: linear-gradient(90deg, #9C88AC, #70587c);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
    margin-top: 20px;

    &:hover {
      background: linear-gradient(90deg, #70587c, #9C88AC);
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
      background: #9C88AC;
      cursor: not-allowed;
    }
  }

  .qty {
    margin-top: 10px;
    font-size: 18px;
    color: #70587c;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0); // State to track quantity added

  // List of products with images and descriptions
  const mockProducts = [
    { id: 1, name: 'Smartwatch', price: 150, image: '/src/assets/Images/Smartwatch.jpg', description: 'Stay connected and track your fitness with this amazing smartwatch.' },
    { id: 2, name: 'Designer Bag', price: 350, image: '/src/assets/Images/Designerbags.jpeg', description: 'A luxurious designer bag to enhance your style and make a statement.' },
    { id: 3, name: 'Headphones', price: 100, image: '/src/assets/Images/Headphones.jpeg', description: 'Experience the best sound quality with our high-fidelity headphones.' },
    { id: 4, name: 'Running Shoes', price: 120, image: '/src/assets/Images/Shoes.jpeg', description: 'Comfortable and stylish running shoes for all your fitness needs.' },
    { id: 5, name: 'Sunglasses', price: 75, image: '/src/assets/Images/Sunglasses.webp', description: 'Trendy and protective sunglasses for sunny days.' },
    { id: 6, name: 'Bluetooth Speaker', price: 200, image: '/src/assets/Images/Speakers.webp', description: 'Powerful Bluetooth speaker for an unmatched audio experience.' },
    { id: 7, name: 'Camera', price: 500, image: '/src/assets/Images/Camera.jpg', description: 'Capture every moment with this high-definition professional camera.' },
    { id: 8, name: 'Laptop', price: 900, image: '/src/assets/Images/Laptop.jpg', description: 'A lightweight and powerful laptop for work, entertainment, and creativity.' },
  ];

  // Fetch product details based on ID
  useEffect(() => {
    const fetchedProduct = mockProducts.find((prod) => prod.id === parseInt(id));
    setProduct(fetchedProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setQuantity(quantity + 1); // Increment quantity when adding to cart
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <ProductDetailsContainer>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <button onClick={handleAddToCart} disabled={quantity > 0}>
        {quantity > 0 ? `Added ${quantity} qty` : 'Add to Cart'}
      </button>
      {quantity > 0 && <p className="qty">Quantity: {quantity}</p>}
    </ProductDetailsContainer>
  );
};

export default ProductDetails;