import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Movie } from '../../../core/models/Movie.Model'
import MoviePoster from './MoviePoster'

interface PosterCarouselProps {
    movies : Movie[],
    height? : number,

}

const PosterCarousel = ({movies, height= 440}:PosterCarouselProps) => {
  return (
    <View style={{ height: height, }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                movies.map((movie) => (
                    <MoviePoster key={movie.id} movie={movie} />
                ))
            }
        </ScrollView>
    </View>
  )
}

export default PosterCarousel