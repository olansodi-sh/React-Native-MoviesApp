import React, { useEffect, useRef } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { Movie } from '../../../core/models/Movie.Model'
import MoviePoster from './MoviePoster'

interface HorizontalCarouselProps {
    movies: Movie[];
    title?: string;
    loadNextPage?: () => void;
}


const HorizontalCarousel = ({ movies, title, loadNextPage }: HorizontalCarouselProps) => {

    const isLoading = useRef(false);


    useEffect(() => {
      setTimeout(() => {
        isLoading.current = false;
      }, 200);
  
    }, [ movies ])
    
    
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

    if ( isLoading.current ) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached = ( contentOffset.x + layoutMeasurement.width + 600 ) >= contentSize.width;
    if ( !isEndReached ) return;

    isLoading.current = true;

    // Cargar las siguientes películas
    loadNextPage && loadNextPage();

  }
  return (
    <View style={{ height: title? 260 : 220 }}>
        {
            title && (
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginBottom: 10 }}>{title}</Text>
            )
        }

        <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item,index) => `${item.id}-${index}`}
        onScroll={(event) => onScroll(event)}
        renderItem={({item}) => (
            <MoviePoster movie={item} width={140} height={200} />
        )}
        />
    </View>
  )
}

export default HorizontalCarousel