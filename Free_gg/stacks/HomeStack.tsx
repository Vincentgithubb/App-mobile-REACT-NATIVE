import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import Details from '../pages/Details'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, statusBarHidden: true }}>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}
