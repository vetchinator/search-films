import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmDescription } from '../../redux/movies-reducer';
import { selectFilmDescription } from '../../redux/movies-selector';
import { useHistory } from 'react-router';
import CharacterRow from '../CharacterRow/CharacterRow';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { FilmDescType } from '../../types/type';
import Preloader from '../common/Preloader/Preloader';
import { Poster, Container } from '../StyledComponets/StyledComponents';

const MovieFullDescription: React.FC = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const id = String(history.location.pathname.substr(6));
        dispatch(getFilmDescription(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    const filmDescription: FilmDescType = useSelector(selectFilmDescription);

    const goToBack = () => {
        history.goBack();
    }

    if (!filmDescription) {
        return <Preloader />
    }

    return (
        <>
            <Button onClick={goToBack}> <LeftOutlined /> Back</Button>
            <Container>
                <Poster src={filmDescription.Poster} alt={`poster ${filmDescription.Title}`} margin={'0 10px'} />
                <div>
                    <CharacterRow title='Title' value={filmDescription.Title} />
                    <CharacterRow title='Year' value={filmDescription.Year} />
                    <CharacterRow title='Country' value={filmDescription.Country} />
                    <CharacterRow title='Genre' value={filmDescription.Genre} />
                    <CharacterRow title='Writer' value={filmDescription.Writer} />
                    <CharacterRow title='Director' value={filmDescription.Director} />
                    <CharacterRow title='Production' value={filmDescription.Production} />
                    <CharacterRow title='Actors' value={filmDescription.Actors} />
                    <CharacterRow title='Language' value={filmDescription.Language} />
                    <CharacterRow title='Awards' value={filmDescription.Awards} />
                    <CharacterRow title='Metascore' value={filmDescription.Metascore} />
                    <CharacterRow title='Released' value={filmDescription.Released} />
                    <CharacterRow title='Type' value={filmDescription.Type} />
                    <CharacterRow title='DVD' value={filmDescription.DVD} />
                    <CharacterRow title='BoxOffice' value={filmDescription.BoxOffice} />
                    <CharacterRow title='Rated' value={filmDescription.Rated} />
                    <CharacterRow title='Website' value={filmDescription.Website} />
                    <CharacterRow title='Plot' value={filmDescription.Plot} />
                    <CharacterRow title='imdbID' value={filmDescription.imdbID} />
                    <CharacterRow title='imdbRating' value={filmDescription.imdbRating} />
                    <CharacterRow title='imdbVotes' value={filmDescription.imdbVotes} />
                    <CharacterRow title='Runtime' value={filmDescription.Runtime} />

                    {filmDescription.Ratings && filmDescription.Ratings.map((rating) => 
                        <CharacterRow key={rating.Source} title={rating.Source} value={rating.Value} />
                    )}
                </div>
            </Container>
        </>
    )
}

export default React.memo(MovieFullDescription);
