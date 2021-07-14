import React from 'react';
import { Link } from 'react-router-dom';
import { movieType } from '../../types/type';
import styled from 'styled-components/macro';
import CharacterRow from '../CharacterRow/CharacterRow';
import { Poster } from '../StyledComponets/StyledComponents';

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    cursor: pointer;
    padding: 10px 0px;
    transition: all 0.4s linear;
    width: 330px;
    min-height: 550px; 
    justify-content: space-around;
    border: 1px solid transparent;
    border-radius: 10px;

    &:hover {
       border: 1px solid #1890ff;
    }
`;

type PropType = { movie: movieType }

const Movie: React.FC<PropType> = ({ movie }) => {


    return (
        <Link to={`/film/${movie.imdbID}`} >
            <MovieContainer>
                <div>
                <Poster src={movie.Poster} alt={`poster ${movie.Title}`} />
                </div>
                
                <div style={{width: '75%', marginTop: '10px'}}>
                    <CharacterRow title='Title:' value={movie.Title} />
                    <CharacterRow title='Type:' value={movie.Type} />
                    <CharacterRow title='Year:' value={movie.Year} />
                    <CharacterRow title='imdbID:' value={movie.imdbID} />
                </div>   
            </MovieContainer>
        </Link>
    )
}

export default React.memo(Movie);
