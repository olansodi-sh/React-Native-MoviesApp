import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularResponse } from "../../../infrastructure/interfaces/MovieDB.Responses";
import { MovieMapper } from "../../../infrastructure/mappers/Movie.Mapper";
import type { Movie } from "../../models/Movie.Model";

export const MoviesPopularUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> =>{

    try {
        
        const popular = await fetcher.get<PopularResponse>('/popular')

        return popular.results.map( result => 
            MovieMapper.fromMovieDBResultModel(result)
        )
    } catch (error) {
        throw new Error('Error fetching popular movies')
    }

}