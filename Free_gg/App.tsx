import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './stacks/HomeStack'
import GamesStack from './stacks/GamesStack'
import OptionStack from './stacks/OptionStack'
import { NavigationContainer } from '@react-navigation/native'

const NavStack = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <NavStack.Navigator screenOptions={{ headerShown: false }}>
        <NavStack.Screen name="home" component={HomeStack} />
        <NavStack.Screen name="games" component={GamesStack} />
        <NavStack.Screen name="option" component={OptionStack} />
      </NavStack.Navigator>
    </NavigationContainer>
  )
}
