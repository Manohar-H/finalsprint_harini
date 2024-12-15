import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
  }

  .home-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Checkout = () => {
  return (
    <CheckoutContainer>
      <h1>Order Confirmation</h1>
      <p>Thank you for your purchase! Your order has been placed successfully.</p>
      <Link to="/" className="home-button">
        Back to Home
      </Link>
    </CheckoutContainer>
  );
};

export default Checkout;