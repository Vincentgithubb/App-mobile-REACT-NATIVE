import { Text, View, StyleSheet, Platform } from 'react-native'
import Header from '../components/Header'

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#271C4D',
    height: '100%'
  },
  Title: {
    color: '#2B6692',
    position: 'absolute',
    right: '39%',
    top: '9%',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {},
  box: {
    backgroundColor: '#271C4D',
    top: '20%',
    height: 620,
    width: '87%',
    marginHorizontal: '7%',
    borderWidth: 2,
    borderBlockColor: 'black',
    position: 'absolute',
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 10,
        shadowRadius: 10,
        shadowOffset: { width: 100, height: 60 }
      },
      android: {
        elevation: 22
      }
    })
  }
})

export default function Option() {
  return (
    <View style={styles.background}>
      <Header />
      <Text style={styles.Title}>Option</Text>
      <View style={styles.box}>
        <View>
          <Text style={styles.container}>PC</Text>
        </View>
      </View>
    </View>
  )
}
