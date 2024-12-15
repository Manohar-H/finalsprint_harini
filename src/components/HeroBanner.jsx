import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: linear-gradient(90deg, #9C88AC, #604464, #9C88AC); 
  color: white;
  text-align: center;
  padding: 30px 20px;
  margin-bottom: 20px;

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  button {
    background: white;
    color: #ff7e5f;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #feb47b;
      color: white;
      transform: scale(1.1);
    }
  }
`;

const HeroBanner = () => {
  return (
    <HeroContainer>
      <h1>Welcome to Harini's Luxe Store</h1>
      <p>Your destination for premium products</p>
      <button onClick={() => window.location.href = '/'}>Shop Now</button>
    </HeroContainer>
  );
};

export default HeroBanner;