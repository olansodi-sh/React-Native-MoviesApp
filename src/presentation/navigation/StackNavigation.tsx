import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';

export type RootStackParamList = {
    HomeScreen: undefined;
    DetailsScreen:{ movieId: number};
}

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
  </Stack.Navigator>
  )
}

export default StackNavigation