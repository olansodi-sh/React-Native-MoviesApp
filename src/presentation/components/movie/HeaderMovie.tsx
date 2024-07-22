import React from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

interface HeaderMovieProps {
    poster: string;
    original_title: string;
    title: string;
}
const { width, height} = Dimensions.get('screen');

const HeaderMovie = ({ poster, original_title, title }:HeaderMovieProps) => {


    const navigation = useNavigation();

  return (
    <React.Fragment>

    <View style={{ ...styles.imageContainer, height:height*0.7 }}>

        <View style={styles.imageBorder}>
            <Image source={{uri: poster}} style={styles.posterImage} />
        </View>

    </View>

    <View style={{ ...styles.marginContainer, marginHorizontal:20 }}>
        <Text style={{ ...styles.subTitle, color:'black' }}>{ original_title}</Text>
        <Text style={{ ...styles.title, color:'black', fontWeight:'bold' }}>{ title}</Text>
    </View>

    <View style={ styles.backButton }>
        <Pressable onPress={ () => navigation.goBack() }>
            <Text style={{ ...styles.backButtonText }}> Regresar </Text>
        </Pressable>
    </View>

    </React.Fragment>
  )
}

export default HeaderMovie

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
  
    imageBorder: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    posterImage: {
      flex: 1,
    },
  
    marginContainer: {
    //   marginHorizontal: 20,
      marginTop: 20,
    },
    subTitle: {
      fontSize: 16,
      opacity: 0.8,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      top: 35,
      left: 10,
    },
    backButtonText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.55)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
  });