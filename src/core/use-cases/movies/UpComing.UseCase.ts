import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { UpComingResponse } from "../../../infrastructure/interfaces/MovieDB.Responses";
import { MovieMapper } from "../../../infrastructure/mappers/Movie.Mapper";
import type { Movie } from "../../models/Movie.Model";

export const MoviesUpComingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> =>{

    try {
        
        const upComing = await fetcher.get<UpComingResponse>('/upcoming')

        return upComing.results.map( result => 
            MovieMapper.fromMovieDBResultModel(result)
        )
    } catch (error) {
        throw new Error('Error fetching upComing movies')
    }

}