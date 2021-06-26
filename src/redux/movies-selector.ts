import { RootState } from './redux-store';

export const getTotalCountMovies = (state: RootState) => {
    return state.moviesPage.totalCountMovies;
}

export const getfilter = (state: RootState) => {
    return state.moviesPage.filter;
}

export const getCurrentPage = (state: RootState) => {
    return state.moviesPage.currentPage;
}

export const getErrorMessage = (state: RootState) => {
    return state.moviesPage.errorMessage;
}

export const selectFilmDescription = (state: RootState) => {
    return state.moviesPage.filmDescription;
}



