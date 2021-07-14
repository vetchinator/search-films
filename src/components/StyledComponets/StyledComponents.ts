import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    margin-top: 20px; 
    
    @media screen and (max-width:900px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const BodyContainer = styled.div`
    padding: 20px 20px 50px 20px;
    margin: 0 auto;
    max-width: 1200px;
    text-align: center;
    background-color: white;
    min-height: calc(100vh - 94px);
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 1.5em;
    padding: 10px 20px;
    border-radius: 10px;
` 

type PosterPropsType = {
    margin?: string
}

export const Poster = styled.img<PosterPropsType>`
    height: 100%;
    margin: ${props => props.margin};

`;