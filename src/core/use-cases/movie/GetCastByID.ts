import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBRepart } from "../../../infrastructure/interfaces/MovieDB.Responses";
import { CastMapper } from "../../../infrastructure/mappers/Cast.Mapper";
import { CastModel } from "../../models/Cast.Model";


export const  GetCastByID = async (fetcher: HttpAdapter, movieId: number): Promise<CastModel[]> => {

    try {

        const { cast } = await fetcher.get<MovieDBRepart>(`/${movieId}/credits`)

        const actors= cast.map(actor => CastMapper.fromMovieDBCastModel(actor))

        return actors
        
    } catch (error) {
        throw new Error('Error al obtener el reparto, id :'+movieId)
    }

}
