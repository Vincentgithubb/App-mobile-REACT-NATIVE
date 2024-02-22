import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../stacks/HomeStack'
import GamesStack from '../stacks/GamesStack'
import OptionStack from '../stacks/OptionStack'

const NavStack = createBottomTabNavigator()

export default function TabStack() {
  return (
    <NavStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 18, color: '#2B6692' },
        tabBarStyle: {
          backgroundColor: '#211549',
          borderColor: '#211549',
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute'
        }
      }}
    >
      <NavStack.Screen name="home" component={HomeStack} />
      <NavStack.Screen name="games" component={GamesStack} />
      <NavStack.Screen name="option" component={OptionStack} />
    </NavStack.Navigator>
  )
}
