import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '../pages/Details'
import Games from '../pages/Games'

const Stack = createNativeStackNavigator()

export default function GamesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, statusBarHidden: true }}>
      <Stack.Screen name="Games" component={Games} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}