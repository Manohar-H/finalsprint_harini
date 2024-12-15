import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaShoppingCart } from 'react-icons/fa'; 

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #281826;
  color: #f9f4f5;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 10px;
`;

const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #70587c; /* Button background color */
  color: #f9f4f5;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    background: #8c72a3;
    border-color: #f9f4f5;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Harini's Luxe Store</h1>
      <Navigation>
        <NavButton to="/">
          <FaHome /> Home
        </NavButton>
        <NavButton to="/cart">
          <FaShoppingCart /> Cart
        </NavButton>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;