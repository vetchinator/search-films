import { Pagination } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getErrorMessage, getfilter, getTotalCountMovies, selectLoading, getMovies } from '../../redux/movies-selector';
import Preloader from '../common/Preloader/Preloader';
import Movie from './Movie';
import { getFilms } from '../../redux/movies-reducer';
import * as queryString from 'querystring';
import { useHistory } from 'react-router';
import SearchForm from '../Search/SearchForm';
import { v1 } from 'uuid';
import { ErrorMessage } from '../StyledComponets/StyledComponents';
import styled from 'styled-components/macro';

const MoviesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    grid-column-gap: 15px;
    column-gap: 15px;
    grid-row-gap: 15px;
    row-gap: 15px;
`

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

    if (loading) {
        return <Preloader />
    }

    return (
        <>
            <SearchForm />
            {movies && <MoviesWrapper>
                {movies.map((movie) => (
                    <Movie key={v1()} movie={movie} />
                ))}
            </MoviesWrapper>}

            {movies && <Pagination
                showQuickJumper={true}
                current={currentPage}
                defaultCurrent={1}
                onChange={onChange}
                total={totalCountMovies}
                pageSize={10}
                pageSizeOptions={[]}
                style={{ marginTop: '30px' }}
            />}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </>
    )
}

export default React.memo(Movies);
