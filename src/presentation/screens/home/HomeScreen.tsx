import React from 'react'
import { Text } from 'react-native'
import { UseMovies } from '../../hooks/UseMovies'

const HomeScreen = () => {
  const {} = UseMovies();
  return (
        <React.Fragment>
            <Text>Home Screen</Text>
        </React.Fragment>   
    
  )
}

export default HomeScreen