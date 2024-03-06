import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import Details from '../pages/Details'
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}
