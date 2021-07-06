import { Pagination } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { getCurrentPage, getErrorMessage, getfilter, getTotalCountMovies, selectLoading, getMovies } from '../../redux/movies-selector';
import { movieType } from '../../types/type';
import Preloader from '../common/Preloader/Preloader';
import Movie from './Movie';
import style from './Movies.module.css';
import { getFilms } from '../../redux/movies-reducer';
import * as queryString from 'querystring';
import { useHistory } from 'react-router';
import SearchForm from '../Search/SearchForm';
import { v1 } from 'uuid';

type QueryType = {
    title?: string | undefined,
    year?: string | undefined,
    type?: 'movie' | 'series' | 'episode',
    page?: string | undefined
}

const Movies: React.FC = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const filter = useSelector(getfilter);
    const currentPage = useSelector(getCurrentPage);

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryType;

        let actualPage = currentPage;
        let actualFilter = filter;

        if (!!parsed.page) { actualPage = Number(parsed.page) };
        if (!!parsed.title) { actualFilter = { ...actualFilter, title: parsed.title } };
        if (!!parsed.year) { actualFilter = { ...actualFilter, year: parsed.year } };
        if (!!parsed.type) { actualFilter = { ...actualFilter, type: parsed.type } };
        if (actualFilter.title) {
            dispatch(getFilms(actualFilter, actualPage));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const query: QueryType = {};
        if (!!filter.title) query.title = filter.title;
        if (!!filter.year) query.year = filter.year;
        if (!!filter.type) query.type = filter.type;
        if (currentPage !== 1) query.page = String(currentPage);
        history.push({
            search: queryString.stringify(query),
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter, currentPage])

    let movies = useSelector(getMovies);
    let loading = useSelector(selectLoading);
    const totalCountMovies = Number(useSelector(getTotalCountMovies));
    const errorMessage = useSelector(getErrorMessage);

    const onChange = (page: number) => {
        dispatch(getFilms(filter, page));
    }

    return (
        <>
            <SearchForm />
            {loading ? <Preloader /> : <div>
                {movies.length !== 0 && <div className={style.moviesWrapper}>
                    {movies.map((movie) => (
                        <React.Fragment key={v1()} >
                            <Movie movie={movie} />
                        </React.Fragment>
                    ))}
                </div>}
                <div style={{ textAlign: 'center' }}>
                    <Pagination showQuickJumper={true} className={style.pagination} current={currentPage} defaultCurrent={1} onChange={onChange} total={totalCountMovies} pageSize={10} pageSizeOptions={[]} />
                </div>
            </div>}
            {errorMessage && <div style={{ textAlign: 'center' }}>{errorMessage}</div>}
        </>
    )
}

export default React.memo(Movies);
