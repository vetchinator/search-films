export type movieType = {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}  

type MovieFilterType =  'movie' | 'series' | 'episode' | '';

export type FilterType = {
    title: string,
    year: string,
    type: MovieFilterType
}

type RatingType = {
    Source: string, 
    Value: string
}

export type FilmDescType = {
    Actors: string,
    Awards: string,
    BoxOffice: string
    Country: string
    DVD: string
    Director: string
    Genre: string
    Language: string
    Metascore: string
    Plot: string
    Poster: string
    Production: string
    Rated: string
    Ratings: RatingType[],
    Released: string
    Response: string
    Runtime: string
    Title: string
    Type: string
    Website: string
    Writer: string
    Year: string
    imdbID: string
    imdbRating: string
    imdbVotes: string
} | null
