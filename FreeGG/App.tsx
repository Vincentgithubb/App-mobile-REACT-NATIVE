import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './pages/Home'
import Games from './pages/Games'
import Option from './pages/Option'

const DetailStack = createNativeStackNavigator()
const NavStack = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <NavStack.Navigator>
        <NavStack.Screen name="Home" component={Home} />
        <NavStack.Screen name="Games" component={Games} />
        <NavStack.Screen name="Option" component={Option} />
      </NavStack.Navigator>
    </NavigationContainer>
  )
}
