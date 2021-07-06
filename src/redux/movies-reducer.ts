import { FilterType } from './../types/type';
import { ThunkAction } from 'redux-thunk';
import { InferActionsTypes, RootState } from './redux-store';
import { API } from '../api/api';
import { movieType } from '../types/type';

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionsTypes<typeof actions>;
type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>;

let initialState = {
    loading: false,
    movies: [] as Array<movieType> ,
    errorMessage: '',
    totalCountMovies: '',
    currentPage: 1,
    filter: {
        title: '',
        year: '',
        type: '',  
    } as FilterType,
    filmDescription: {} as any

};

const moviesReducer = (state = initialState, action: ActionTypes): InitialStateType=> {
    switch (action.type) {
        case 'sm/SEARCH_REQUEST': {
            return { ...state, loading: true }
        }
        case 'sm/SEARCH_REQUEST_SUCCESS': {
            return { ...state, movies: action.movies}
        }
        case 'sm/SEARCH_REQUEST_ERROR': {
            return { ...state, loading: false, errorMessage: action.error }
        }
        case 'sm/SET_TOTAL_COUNT_MOVIES': {
            return { ...state, totalCountMovies: action.totalResults }
        }
        case 'sm/SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.page }
        }
        case 'sm/SET_FILTER': {
            return { ...state, filter: action.filter }
        }
        case 'sm/SET_FILM_DESCRIPTION': {
            return { ...state, filmDescription: action.filmDescription }
        }
        case 'sm/CLEAR_FILM_DESCRIPTION': {
            return { ...state, filmDescription: null }
        }
        default:
            return state;
    }
};

export const actions = {
    searchRequest: () => ({ type: "sm/SEARCH_REQUEST" } as const), 
    searchRequestSuccess: (movies: Array<movieType>) => ({ type: "sm/SEARCH_REQUEST_SUCCESS", movies } as const), 
    searchRequestError: (error: string) => ({ type: "sm/SEARCH_REQUEST_ERROR", error } as const), 
    setTotalCountMovies: (totalResults: string) => ({ type: "sm/SET_TOTAL_COUNT_MOVIES", totalResults} as const),
    setCurrentPage: (page: number) => ({ type: "sm/SET_CURRENT_PAGE", page} as const),
    setFilter: (filter: FilterType) => ({ type: "sm/SET_FILTER", filter} as const),
    setFilmDescription: (filmDescription: any) => ({ type: "sm/SET_FILM_DESCRIPTION", filmDescription} as const),
    clearFilmDescription: () => ({ type: "sm/CLEAR_FILM_DESCRIPTION"} as const),
}

export const getFilms =
    (filter: FilterType, page: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.searchRequestSuccess([]));
        dispatch(actions.searchRequest());
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.setFilter(filter));

        let data = await API.getFilms(filter, page);
        if (data.Response === "True") {
            dispatch(actions.searchRequestError(""));
            dispatch(actions.searchRequestSuccess(data.Search));
            dispatch(actions.setTotalCountMovies(data.totalResults));
        } else {
            dispatch(actions.searchRequestError(data.Error));
        }
    };
export const getFilmDescription =
    (id: string): ThunkType =>
    async (dispatch) => {
        let data = await API.getFilmDescription(id);
        if (data.Response === 'True') {
            dispatch(actions.setFilmDescription(data));
        } else {
            dispatch(actions.searchRequestError(data.Error));
        }
    };

export default moviesReducer;
