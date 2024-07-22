import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {UseMovies} from '../../hooks/UseMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movie/PosterCarousel';
import HorizontalCarousel from '../../components/movie/HorizontalCarousel';
import LoaderScreen from '../../components/LoaderScreen';

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying, popular, topRated, upComing, popularNextPage } = UseMovies();

    if (isLoading) {
        return (
            <LoaderScreen />
        );
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                {/* Principal */}
                <PosterCarousel movies={nowPlaying} />

                {/* populares */}
                <HorizontalCarousel movies={popular} loadNextPage={()=>popularNextPage()} title="Populares" />
                    
                {/* Mejor valoradas */}
                <HorizontalCarousel movies={topRated} title="Mejor valoradas" />
                    
                {/* proximamente */}
                <HorizontalCarousel movies={upComing} title="Proximamente" />

            </View>
        </ScrollView>
    );
};

export default HomeScreen;
