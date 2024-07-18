import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { TopRatedResponse } from "../../../infrastructure/interfaces/MovieDB.Responses";
import { MovieMapper } from "../../../infrastructure/mappers/Movie.Mapper";
import type { Movie } from "../../models/Movie.Model";

export const MoviesTopRatedUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> =>{

    try {
        
        const topRated = await fetcher.get<TopRatedResponse>('/top_rated')

        return topRated.results.map( result => 
            MovieMapper.fromMovieDBResultModel(result)
        )
    } catch (error) {
        throw new Error('Error fetching topRated movies')
    }

}