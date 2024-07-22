import { useEffect, useState } from 'react'

import * as UseCases from '../../core/use-cases'
import { MovieDBFetcher } from '../../config/adapters/MovieDB.Adapter';
import { FullMovie } from '../../core/models/Movie.Model';
import { CastModel } from '../../core/models/Cast.Model';

export const UseMovie = ( movieId: number ) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<CastModel[]>([]);

    useEffect(() => {
        loadMovie()
    }, [movieId])
    
    const loadMovie = async () => {

        setIsLoading(true)
        const fullMoviePrmomise =  UseCases.GetMovieByID(MovieDBFetcher,movieId)
        const castPromise =  UseCases.GetCastByID(MovieDBFetcher,movieId)

        const [fullMovie, cast  ] = await Promise.all([fullMoviePrmomise, castPromise])

        
        setMovie(fullMovie)
        setCast(cast)
        setIsLoading(false)

    }


    return {    
        isLoading,
        movie,
        cast
    }
}
