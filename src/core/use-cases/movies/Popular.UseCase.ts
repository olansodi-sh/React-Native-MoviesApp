import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularResponse } from "../../../infrastructure/interfaces/MovieDB.Responses";
import { MovieMapper } from "../../../infrastructure/mappers/Movie.Mapper";
import type { Movie } from "../../models/Movie.Model";

interface Options{
    page?: number;
    limit?: number;
}

export const MoviesPopularUseCase = async ( fetcher: HttpAdapter, options?: Options  ): Promise<Movie[]> =>{

    try {
        
        const popular = await fetcher.get<PopularResponse>('/popular',{
            params: {
                page: options?.page ??  1
            }
        })

        return popular.results.map( result => 
            MovieMapper.fromMovieDBResultModel(result)
        )
    } catch (error) {
        throw new Error('Error fetching popular movies')
    }

}