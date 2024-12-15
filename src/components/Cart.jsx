import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;

    th, td {
      padding: 10px;
      border: 1px solid #ddd;
      text-align: center;
    }

    th {
      background-color: #f4f4f4;
    }
  }

  .total {
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0;
  }

  button {
    background-color: #dc3545;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c82333;
    }
  }

  .checkout-button {
    background-color: #28a745;
    padding: 12px 20px;
    text-decoration: none;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    display: inline-block;
    margin-top: 20px;

    &:hover {
      background-color: #218838;
    }
  }

  .empty-cart {
    font-size: 18px;
    margin: 20px 0;
    color: #6c757d;
  }
`;

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity || 1}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total">Total: ${total.toFixed(2)}</div>
          <Link to="/checkout" className="checkout-button">
            Proceed to Checkout
          </Link>
        </>
      ) : (
        <p className="empty-cart">Your cart is empty!</p>
      )}
    </CartContainer>
  );
};

export default Cart;