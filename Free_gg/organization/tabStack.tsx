import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../stacks/HomeStack'
import GamesStack from '../stacks/GamesStack'
import OptionStack from '../stacks/OptionStack'
import { FontAwesome } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'

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
        },
        tabBarIcon: ({ focused, color, size }) => {
          const route = useRoute()

          let iconName

          if (focused) {
            switch (route.name) {
              case 'home':
                iconName = 'home'
                break
              case 'games':
                iconName = 'gamepad'
                break
              case 'option':
                iconName = 'cog'
                break
              default:
                iconName = 'home'
            }
          } else {
            switch (route.name) {
              case 'home':
                iconName = 'home-outline'
                break
              case 'games':
                iconName = 'gamepad-outline'
                break
              case 'option':
                iconName = 'cog-outline'
                break
              default:
                iconName = 'home-outline'
            }
          }

          return <FontAwesome name={iconName as any} size={size} color={color} />
        }
      }}
    >
      <NavStack.Screen name="home" component={HomeStack} />
      <NavStack.Screen name="games" component={GamesStack} />
      <NavStack.Screen name="option" component={OptionStack} />
    </NavStack.Navigator>
  )
}
