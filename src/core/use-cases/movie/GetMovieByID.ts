import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infrastructure/interfaces/MovieDB.Responses";
import { MovieMapper } from "../../../infrastructure/mappers/Movie.Mapper";
import { FullMovie } from "../../models/Movie.Model";

export const GetMovieByID = async (fetcher: HttpAdapter,movieId:number): Promise<FullMovie> => {

    try {
        
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

        const fullMovie = MovieMapper.fromMovieToModel(movie);
        
        return fullMovie;
        
    } catch (error) {
        throw new Error('Pelicula con el id ' + movieId + ' no encontrada');
    }

}