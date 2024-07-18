import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/MovieDB.Responses";
import { MovieMapper } from "../../../infrastructure/mappers/Movie.Mapper";
import type { Movie } from "../../models/Movie.Model";

export const MoviesNowPlayingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> =>{

    try {
        
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing')

        return nowPlaying.results.map( result => 
            MovieMapper.fromMovieDBResultModel(result)
        )
    } catch (error) {
        throw new Error('Error fetching now playing movies')
    }

}