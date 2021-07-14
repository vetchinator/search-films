import React from 'react';
import styled from 'styled-components/macro';

const FooterContainer = styled.footer`
    display: flex;
    height: 50px;
    color: white;
    background-color: black;
    justify-content: center;
    align-items: center;
    font-size: 1.1em;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <span>&copy;&nbsp;Created by&nbsp;Vetchinov Vlad 2021&nbsp;|&nbsp;</span> 
            <a href="https://github.com/vetchinator/" target="_blank" rel="noreferrer" >https://github.com</a>
        </FooterContainer>
    )
}

export default Footer;
