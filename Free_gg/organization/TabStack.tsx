import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../stacks/HomeStack'
import GamesStack from '../stacks/GamesStack'
import OptionStack from '../stacks/OptionStack'
import React from 'react'
import { faHome, faGear, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Tab = createBottomTabNavigator()

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: any

          if (route.name === 'Home') {
            iconName = faHome
          } else if (route.name === 'Option') {
            iconName = faGear
          } else {
            iconName = faGamepad
            size = 32
          }

          return <FontAwesomeIcon icon={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#261858',
        tabBarInactiveTintColor: '#2B6692',
        tabBarLabelStyle: { fontSize: 18, color: '#2B6692' },
        tabBarStyle: {
          backgroundColor: '#211549',
          borderColor: '#211549',
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute'
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Games" component={GamesStack} />
      <Tab.Screen name="Option" component={OptionStack} />
    </Tab.Navigator>
  )
}
