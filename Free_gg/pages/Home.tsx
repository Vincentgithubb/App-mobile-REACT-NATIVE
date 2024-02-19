import { Text, View, StyleSheet } from 'react-native'
import Header from '../components/Header'

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#271C4D',
    height: '100%'
  },
  title: {
    color: 'grey',
    fontSize: 16,
    marginLeft: 8,
    marginTop: 4
  }
})

export default function Home() {
  return (
    <View style={styles.background}>
      <Header />
      <View>
        <Text style={styles.title}>10 Random Games</Text>
      </View>
    </View>
  )
}
