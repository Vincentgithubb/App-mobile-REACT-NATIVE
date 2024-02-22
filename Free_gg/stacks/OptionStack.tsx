import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Option from '../pages/Option'

const Stack = createNativeStackNavigator()

export default function OptionStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, statusBarHidden: true }}>
      <Stack.Screen name="OptionPage" component={Option} />
    </Stack.Navigator>
  )
}
