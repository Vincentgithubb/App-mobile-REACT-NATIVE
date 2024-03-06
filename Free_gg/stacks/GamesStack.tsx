import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '../pages/Details'
import Games from '../pages/Games'

const Stack = createNativeStackNavigator()

export default function GamesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GamesPage" component={Games} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}
