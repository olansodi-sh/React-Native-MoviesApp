import { AxiosAdapter } from "./http/axios.adapter";


export const MovieDBFetcher = new AxiosAdapter ({
    
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'6fc3a2bd2cfc68317858207c1572e70a',
        language: 'es',
    }
})