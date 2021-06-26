import { FilterType } from './../types/type';
import axios from 'axios';

const apikey = '69a7f601';

export const instance = axios.create({
    baseURL: "https://www.omdbapi.com/",
});

export const API = {
    async getFilms({title, type, year}: FilterType, currentPage=1) {
        const response = await instance.get(`?apikey=${apikey}&s=${title}&type=${type}&y=${year}&page=${currentPage}`);
        return response.data;
    },
    async getFilmDescription(id: string) {
        const response = await instance.get(`?apikey=${apikey}&i=${id}&plot=full`);
        return response.data;
    },
}