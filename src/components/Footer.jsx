import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <p>Made with ❤️ for the Oceans | Ocean Adventure</p>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #0077b6;
  color: white;
`;

export default Footer;
