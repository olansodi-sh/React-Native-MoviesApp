import React from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { UseMovie } from '../../hooks/UseMovie';
import HeaderMovie from '../../components/movie/HeaderMovie';
import DetailMovie from '../../components/movie/DetailMovie';
import { ScrollView } from 'react-native-gesture-handler';
import LoaderScreen from '../../components/LoaderScreen';

interface DetailsScreenProps  extends StackScreenProps<RootStackParamList, 'DetailsScreen'>{};
const DetailsScreen = ({ route }: DetailsScreenProps) => {

  const { movieId } = route.params;

  const { isLoading, movie, cast } = UseMovie(movieId);

  if ( isLoading){
    return <LoaderScreen />
  }
  
  return (
    <React.Fragment>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white'}}>
        <HeaderMovie poster={movie!.poster} original_title={movie!.original_title} title={movie!.title} />
        <DetailMovie rating={movie!.rating} genres={movie!.genres} description={movie!.description} budget={movie!.budget} cast={cast}  />
        
      </ScrollView>
    </React.Fragment>
  )
}

export default DetailsScreen