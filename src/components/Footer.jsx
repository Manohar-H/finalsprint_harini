import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #281826;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 18px;

  a {
    color: #ffc107;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2024 Harini's Luxe Store | <a href="/contact">Contact Us</a>
    </FooterContainer>
  );
};

export default Footer;