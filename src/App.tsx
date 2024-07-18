import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'

import React from 'react'
import StackNavigation from './presentation/navigation/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App