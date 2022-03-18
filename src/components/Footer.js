import React from 'react';
import styled from 'styled-components';


const Footer = () => {
  return (
    <FooterDiv>
        Robin Deneckere | 2022
    </FooterDiv>
  )
}

const FooterDiv = styled.footer`
    width: 100%;
    margin: 0 auto;
    margin-top: 3rem;
    background: #494949;
    color: white;
    text-align: center;
    padding: 1rem 0;
    position: fixed;
    bottom: 0;
`;

export default Footer