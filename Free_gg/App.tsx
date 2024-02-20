import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './stacks/HomeStack'
import GamesStack from './stacks/GamesStack'
import OptionStack from './stacks/OptionStack'
import { NavigationContainer } from '@react-navigation/native'
import { ScrollView, Text, View, TextInput, Image, StyleSheet } from 'react-native'
import TabStack from './organization/tabStack'

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#271C4D'
  }
})

const NavStack = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  )
}
