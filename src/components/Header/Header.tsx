import React from "react";
import styled from 'styled-components/macro';

const HeaderContainer = styled.header`
    text-align: center;
    color: #0f135e;
    background-color: black;

    & h1 {
        margin: 0;
        color: aliceblue;
    }
    
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <h1>Search movies</h1>
        </HeaderContainer>
    )
}

export default Header;