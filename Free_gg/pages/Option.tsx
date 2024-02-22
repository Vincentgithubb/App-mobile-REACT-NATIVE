import { Text, View, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import { useBearStore } from '../store/StoreOption'
import { all } from 'axios'

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
  displaybutton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#2B66924F',
    height: 37,
    width: 270,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button_active: {
    backgroundColor: 'red'
  },
  text: {
    color: 'white',
    fontSize: 20
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
  const { option, changeOption } = useBearStore((state) => state)

  return (
    <View style={styles.background}>
      <Header />
      <Text style={styles.Title}>Option</Text>
      <View style={styles.box}>
        <View style={styles.displaybutton}>
          <TouchableOpacity onPress={() => changeOption('PC (Windows)')}>
            <View style={styles.button}>
              <Text style={styles.text}>PC (Windows)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeOption('Web Browser')}>
            <View style={styles.button}>
              <Text style={styles.text}>Web Browser</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeOption('All')}>
            <View style={styles.button}>
              <Text style={styles.text}>All</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ color: 'white', marginTop: 20, fontSize: 20 }}>Current Option :</Text>
          <Text style={{ color: 'white', marginTop: 20, fontSize: 30 }}>{option}</Text>
        </View>
      </View>
    </View>
  )
}
