import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/models/Movie.Model'
import * as UseCases from '../../core/use-cases'
import { MovieDBFetcher } from '../../config/adapters/MovieDB.Adapter';

export const UseMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upComing, setUpComing] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad()

    }, [])

    const initialLoad = async () => {

        const nowPlayingPromise =  UseCases.MoviesNowPlayingUseCase(MovieDBFetcher);
        const popularPromise =  UseCases.MoviesPopularUseCase(MovieDBFetcher);
        const topRatedPromise =  UseCases.MoviesTopRatedUseCase(MovieDBFetcher);
        const upComingPromise =  UseCases.MoviesUpComingUseCase(MovieDBFetcher);

        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upComingMovies,
        ] = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upComingPromise,
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpComing(upComingMovies);

        setisLoading(false);
        console.log(
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upComingMovies,
        )
    }
  return{
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComing,
  }
}
