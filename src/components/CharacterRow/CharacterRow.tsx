import React from 'react';
import styled from 'styled-components/macro';

type PropType = {
    title: string | undefined,
    value: string ,
}

const Row = styled.div`
    display: flex;
    text-align: left;
    padding: 0px 15px;
    
    &:not(:first-child) {
        margin-top: 15px;
    }

    @media (min-width: 501px) and (max-width: 800px) {
        width: 80%;
        justify-content: space-between;
        margin: 0 auto;
    }


`;

const Title = styled.div`
    color: grey;
    width: 40%;
    color: cadetblue;
`;

const Value = styled.div`
    width: 60%;
    color: midnightblue;
`;


const CharacterRow: React.FC<PropType> = ({ title, value }) => {

    if (!value) { return null }

    return (
        <Row>
            <Title>
                {title}
            </Title>
            <Value>
                {value}
            </Value>
        </Row>
    )
}

export default CharacterRow;