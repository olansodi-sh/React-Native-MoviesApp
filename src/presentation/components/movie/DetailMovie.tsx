import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { CastModel } from '../../../core/models/Cast.Model';
import CardActor from './CardActor';

interface DetailMovieProps {
    rating: number;
    genres: string[];
    description: string;
    budget: number;
    cast: CastModel[];
}

const formatMoney = (amount: number): string => {
    return new Intl.NumberFormat('es-US', { style: 'currency', currency: 'USD' }).format(amount)

}

const DetailMovie = ({ rating, genres, description, budget, cast}: DetailMovieProps) => {

  return (

        <View style={{ marginHorizontal:20 }}>
            <View style={{ flexDirection:'row'}}>
                
                <Text style={{ color:'black',}}>{rating}</Text>
                <Text style={{ marginLeft:5, color: 'black' }}> - {genres.join(', ')}</Text>
            </View>

            <Text style={{ color:'black', fontSize:23, fontWeight:'bold'}}>Historia</Text>

            <Text style={{ color:'black', fontSize:16, textAlign:'justify'}}>{description}</Text>

            <Text style={{ color:'black', fontSize:23, fontWeight:'bold', marginTop:10 }}> presupuesto </Text>

            <Text style={{ color:'black', fontSize:18 }}>{formatMoney(budget)}</Text>

            {/* Casting */}
            <View style={{ marginTop:10, marginBottom:100}}>
                <Text style={{ color:'black', fontSize:23, fontWeight:'bold', marginVertical:10, marginHorizontal:20}}>Reparto</Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardActor actor={item} />
                    )}
                    />
            </View>
        </View>

  )
}

export default DetailMovie