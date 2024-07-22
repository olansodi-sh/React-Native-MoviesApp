import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Movie } from '../../../core/models/Movie.Model'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/StackNavigation';

interface MoviePosterProps {
    movie: Movie;
    height?: number;
    width?: number;

}
const MoviePoster = ({movie, height=420, width=300}:MoviePosterProps) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable
    onPress={ () => navigation.navigate('DetailsScreen',{ movieId: movie.id }) }
    style={({pressed})=>({
        width:width,
        height:height,
        marginHorizontal:10,
        paddingBottom:10,
        paddingHorizontal:7,
        opacity: pressed ? 0.9 : 1
    })}>    
        <View style={{ ...styles.imageContainer, height:height, width:width }}>
            <Image
                style={ styles.image }
                source={{uri:movie.poster}}
                />
        </View>
    </Pressable>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
    image:{
        flex: 1,
        borderRadius:18
    },
    imageContainer:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.24,
        shadowRadius:7,
        elevation:9
    }

})