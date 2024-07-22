import { CastModel } from "../../core/models/Cast.Model";
import { MovieDBCast } from "../interfaces/MovieDB.Responses";

export class CastMapper{
     
    static fromMovieDBCastModel( actor: MovieDBCast ): CastModel {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar:actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`: 'https://i.stack.imgur.com/l60Hf.png'
        }
    }
}



