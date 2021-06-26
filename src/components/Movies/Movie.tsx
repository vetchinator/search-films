import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../redux/movies-reducer';
import { movieType } from '../../types/type';
import style from './Movies.module.css';

type PropType = {movie: movieType}

const Movie: React.FC<PropType> = ({ movie }) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(actions.clearFilmDescription());
    }

    return (
        <Link to={ `/film/${movie.imdbID}`} onClick={onClick} replace={true}>
            <div className={style.movieWrapper}>
                <img className={style.poster} src={movie.Poster} alt={`poster ${movie.Title}`} />
                <div className={style.featureMovie}>
                    <div><span className={style.title}>Title: </span> <span className={style.value}>{movie.Title}</span></div>
                    <div><span className={style.title}>Type: </span><span className={style.value}>{movie.Type}</span></div>
                    <div><span className={style.title}>Year: </span><span className={style.value}>{movie.Year}</span></div>
                    <div><span className={style.title}>imdbID: </span><span className={style.value}>{movie.imdbID}</span></div>
                </div>
            </div>
        </Link>
    )
}

export default React.memo(Movie);
