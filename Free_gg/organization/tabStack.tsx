import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../stacks/HomeStack'
import GamesStack from '../stacks/GamesStack'
import OptionStack from '../stacks/OptionStack'

const NavStack = createBottomTabNavigator()

export default function TabStack() {
  return (
    <NavStack.Navigator screenOptions={{ headerShown: false }}>
      <NavStack.Screen name="home" component={HomeStack} />
      <NavStack.Screen name="games" component={GamesStack} />
      <NavStack.Screen name="option" component={OptionStack} />
    </NavStack.Navigator>
  )
}
