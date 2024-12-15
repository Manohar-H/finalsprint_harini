import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  justify-items: center;
`;

const ProductCard = styled.div`
  background: #f8f9fa;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 400px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 18px;
    color: #343a40;
  }

  p {
    font-size: 16px;
    color: #007bff;
    font-weight: bold;
  }

  button, a {
    display: inline-block;
    margin: 10px 5px;
    color: white;
    background: linear-gradient(90deg, #70587C, #9C88AC);
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover, a:hover {
    background: linear-gradient(90deg, #9C88AC, #70587C);
    transform: scale(1.05);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems } = useCart();

  const isItemAdded = (id) => cartItems.some((item) => item.id === id);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/src/mock-api/products.json'); // Relative path
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button
            className={isItemAdded(product.id) ? 'added' : ''}
            onClick={() => addToCart(product)}
            disabled={isItemAdded(product.id)}
          >
            {isItemAdded(product.id) ? 'Added' : 'Add to Cart'}
          </button>
          {/* View Details Button */}
          <Link to={`/product/${product.id}`}>View Details</Link>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};

export default ProductList;