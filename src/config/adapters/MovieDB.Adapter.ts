import { AxiosAdapter } from "./http/axios.adapter";
import { THE_MOVIE_DB_API_KEY } from '@env'


export const MovieDBFetcher = new AxiosAdapter ({
    
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key:THE_MOVIE_DB_API_KEY ?? 'No key',
        language: 'es',
    }
})